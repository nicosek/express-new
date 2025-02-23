#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// 📌 Nom du projet récupéré en argument
const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Merci de spécifier un nom de projet : express-new my-api");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

// 📌 Étape 1 : Création du dossier et initialisation du projet
console.log("📁 Création du projet...");
fs.mkdirSync(projectPath);
process.chdir(projectPath);
execSync("npm init -y", { stdio: "inherit" });

// 📌 Étape 2 : Installation des dépendances essentielles
console.log("📦 Installation des dépendances...");
execSync(
  `npm install express mongoose dotenv cors morgan jsonwebtoken bcryptjs cloudinary express-fileupload crypto-js uid2 lodash pluralize`,
  { stdio: "inherit" }
);

// execSync("npm install nodemon --save-dev", { stdio: "inherit" });

// 📌 Étape 3 : Création de la structure du projet
console.log("🛠️ Génération de la structure...");

const folders = [
  "src",
  "src/controllers",
  "src/models",
  "src/routes",
  "src/middlewares",
  "src/services",
  "src/utils",
  "src/scripts",
  "src/policies",
  "config",
];

folders.forEach((folder) =>
  fs.mkdirSync(path.join(projectPath, folder), { recursive: true })
);

// 📌 Etape 3bis : Modification de package.json pour ajouter "start": "node src/index.js" dans les scripts
const packageJsonPath = path.join(projectPath, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

packageJson.scripts = {
  ...packageJson.scripts,
  seed: "node src/scripts/seed.js",
  start: "node src/index.js",
  console: "node src/scripts/console.js",
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// 📌 Étape 4 : Création des fichiers essentiels
const files = {
  ".gitignore": "node_modules/\n.env\n.DS_Store",
  "config/database.js": `const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ MongoDB connecté !");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;`,
  "config/cloudinary.js": `const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configuration de Cloudinary avec les variables d'environnement
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
`,
  "src/scripts/console.js": `#!/usr/bin/env node
require("dotenv").config();
const connectToDatabase = require("../../config/database");
const path = require("path");
const fs = require("fs");
const repl = require("repl");
const mongoose = require("mongoose");

(async () => {
  try {
    // ✅ Attendre que la connexion soit établie
    await connectToDatabase();
    console.log("✅ Connexion MongoDB établie !");
    console.log("🔹 Tape await mongoose.disconnect() pour quitter proprement.");
    console.log("🔹 Utilise [Model].find() pour interroger la base.");

    // 📌 Détection automatique du dossier /models
    const possiblePaths = ["models", "src/models"];
    let modelsPath = possiblePaths.find((p) =>
      fs.existsSync(path.join(__dirname, "..", p))
    );

    if (!modelsPath) {
      console.error("❌ Aucun dossier 'models' trouvé !");
      process.exit(1);
    }

    // 📌 Chargement dynamique des modèles Mongoose
    const models = {};
    fs.readdirSync(path.join(__dirname, "..", modelsPath))
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const modelName = path.basename(file, ".js");
        models[modelName] = require(path.join(
          __dirname,
          "..",
          modelsPath,
          file
        ));
      });

    console.log("ℹ️  Modèles disponibles :", Object.keys(models).join(", "));

    // 📌 Démarrage de la console REPL avec les modèles injectés
    const replServer = repl.start("> ");
    replServer.context.mongoose = mongoose;

    Object.entries(models).forEach(([name, model]) => {
      replServer.context[name] = model;
    });

    // 🚀 Gestion propre de CTRL+C
    replServer.on("exit", async () => {
      console.log("\n🛑 Fermeture de la connexion MongoDB...");
      await mongoose.disconnect();
      console.log("✅ Déconnecté proprement.");
      process.exit(0);
    });

    // 🚀 Capture SIGINT pour éviter la répétition
    process.on("SIGINT", async () => {
      replServer.close(); // Déclenche l'événement "exit"
    });
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB :", error);
    process.exit(1);
  }
})();
`,
  "src/scripts/seed.js": ``,
  "src/models/User.js": `const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TOKEN_EXPIRATION = "7d";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    salt: { type: String, required: true },
    passwordHash: { type: String, required: true },
    token: { type: String },
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password + this.salt, this.passwordHash);
};

UserSchema.methods.generateToken = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: TOKEN_EXPIRATION,
  });
};

module.exports = mongoose.model("User", UserSchema);
`,
  "src/routes/auth.js": `const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth_controller");
const asyncHandler = require("../middlewares/async-handler");

// 🔑 Signup - POST /auth/signup
router.post("/signup", asyncHandler(AuthController.signup));

// 🔐 Login - POST /auth/login
router.post("/login", asyncHandler(AuthController.login));

module.exports = router;
`,
  "src/controllers/auth_controller.js": `const User = require("../models/user");
const bcrypt = require("bcryptjs");
const uid2 = require("uid2");
const {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/errors");

const AuthController = {
  // 🔑 Inscription
  signup: async (req, res, next) => {
    const { email, password } = req.body;

    // 🔍 Vérification des champs requis
    const missingFields = [];
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
      return next(
        new BadRequestError(
          \`Missing required fields: \${missingFields.join(", ")}\`
        )
      );
    }

    // 📌 Vérifier si l'email est déjà utilisé
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ConflictError("Email already in use"));
    }

    // 🔑 Génération du salt et hash du mot de passe
    const salt = uid2(16);
    const passwordHash = bcrypt.hashSync(password + salt, 10);

    // 🔑 Création de l'utilisateur
    const newUser = new User({
      email,
      salt,
      passwordHash,
    });
    await newUser.save();

    // 🎯 Réponse optimisée
    res.status(201).json({
      _id: newUser._id,
      token: newUser.generateToken(),
    });
  },

  // 🔐 Connexion
  login: async (req, res, next) => {
    const { email, password } = req.body;

    // 🔍 Vérification des champs requis
    const missingFields = [];
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
      return next(
        new BadRequestError(
          \`Missing required fields: \${missingFields.join(", ")}\`
        )
      );
    }

    // 📌 Récupération de l'utilisateur avec son salt et son hash
    const user = await User.findOne({ email }).select("+salt +passwordHash");

    if (!user) {
      return next(new NotFoundError(null, { modelName: "User" }));
    }

    if (!bcrypt.compareSync(password + user.salt, user.passwordHash)) {
      return next(new UnauthorizedError("Invalid credentials"));
    }

    // 🎯 Réponse optimisée
    res.status(200).json({
      _id: user._id,
      token: user.generateToken(),
    });
  },
};

module.exports = AuthController;
`,
  "src/middlewares/authorize.js": `const { ForbiddenError } = require("../utils/errors");

const authorize = (Model, action) => {
  return async (req, res, next) => {
    // ✅ 1. Récupération du record (s'il y a un \`req.params.id\`)
    const record = req.params.id ? await Model.findById(req.params.id) : null;

    // ✅ 2. Chargement de la Policy (erreur naturelle si inexistante)
    const PolicyClass = require(\`../policies/\${Model.modelName.toLowerCase()}_policy\`);

    // ✅ 3. Vérification de l'autorisation via la Policy (erreur naturelle si action non définie)
    const policy = new PolicyClass(req.user, record);

    if (!policy[action]()) {
      return next(new ForbiddenError()); // 🔥 Erreur 403
    }

    next();
  };
};

module.exports = authorize;
`,
  "src/middlewares/auth_middleware.js": `const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Accès refusé" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalide" });
  }
};

module.exports = authMiddleware;`,
  "src/middlewares/async-handler.js": `const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    next(err);
  });
};

module.exports = asyncHandler;
`,
  "src/middlewares/error-handler.js": `const { MONGO_ERROR_MAP } = require("../utils/mongo_errors");

const errorHandler = (err, req, res, next) => {
  const ErrorClass = MONGO_ERROR_MAP[err.name] || MONGO_ERROR_MAP[err.code];
  if (ErrorClass) err = new ErrorClass(null, { err });

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
};

module.exports = errorHandler;
`,
  "src/utils/errors.js": `
const pluralize = require("pluralize");

class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(message, options = {}) {
    const modelName = options.modelName || "Resource";
    super(message || \`\${modelName} not found\`, 404);
  }
}

class BadRequestError extends AppError {
  constructor(message, options = {}) {
    if (options.err?.name === "CastError") {
      message = \`Invalid ID format for field "\${options.err.path}"\`;
    }

    if (options.err?.name === "ValidationError") {
      const errorMessages = Object.values(options.err.errors).map(
        (e) => e.message
      );
      message = \`Validation failed: \${errorMessages.join(", ")}\`;
    }

    super(message || "Bad Request", 400);
  }
}

class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

class DuplicateKeyError extends AppError {
  constructor(message, options = {}) {
    const modelName = extractModelName(options.err);
    const fieldName = Object.keys(options.err.keyPattern)[0]; // Ex: "email"
    super(message || \`\${modelName} with this \${fieldName} already exists\`, 400);
  }
}

class ConflictError extends AppError {
  constructor(message = "Conflict Error") {
    super(message, 400);
  }
}

const extractModelName = (err) => {
  const match = err.message.match(/collection: (\\w+)\\.(\\w+)/);
  if (match && match[2]) {
    let modelName = pluralize.singular(match[2]);
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  }
  return "UnknownModel";
};

module.exports = {
  AppError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  DuplicateKeyError,
  ForbiddenError,
  ConflictError,
};`,
  "src/utils/mongo_errors.js": `const { DuplicateKeyError, BadRequestError } = require("./errors");

const MONGO_ERROR_MAP = {
  ValidationError: BadRequestError, // 📌 Erreur de validation Mongoose
  CastError: BadRequestError, // Ajout pour gérer les IDs malformés
  11000: DuplicateKeyError, // 📌 Contrainte d'unicité MongoDB
};

module.exports = { MONGO_ERROR_MAP };
`,
  "src/utils/cloudinary.js": `const cloudinary = require("../../config/cloudinary");

const uploadImage = async (file, folder) => {
  if (!file || !file.tempFilePath) {
    throw new Error("No file provided or invalid file path");
  }

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder,
      use_filename: true, // Utilise le nom du fichier comme public_id
    });

    return result;
  } catch (error) {
    console.error("⚠️ Cloudinary upload failed:", error.message);
    throw new Error(error.message);
  }
};

const deleteImage = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("❌ Error deleting image from Cloudinary:", error);
  }
};

module.exports = { uploadImage, deleteImage };
`,
  "src/utils/format.js": `const _ = require("lodash");

const snakeCaseKeys = (obj, seen = new Set()) => {
  if (
    !obj ||
    typeof obj !== "object" ||
    obj instanceof Date ||
    obj instanceof Buffer
  ) {
    return obj;
  }

  // ✅ Convertir Mongoose Documents en objets JS avant transformation
  if (obj.toObject && typeof obj.toObject === "function") {
    obj = obj.toObject();
  }

  if (seen.has(obj)) {
    return obj; // Évite les références circulaires
  }
  seen.add(obj);

  if (Array.isArray(obj)) {
    return obj.map((item) => snakeCaseKeys(item, seen));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const newKey = _.snakeCase(key);
    let value = obj[key];

    // ✅ Correction ultime : conversion propre des ObjectId
    if (value instanceof require("mongoose").Types.ObjectId) {
      acc[newKey] = value.toString();
    } else {
      acc[newKey] = snakeCaseKeys(value, seen);
    }

    return acc;
  }, {});
};

module.exports = { snakeCaseKeys };
`,
  "src/policies/base_policy.js": `class BasePolicy {
  constructor(user, record) {
    this.user = user;
    this.record = record;
  }

  isOwner() {
    return (
      this.user &&
      this.record &&
      this.user._id.toString() === this.record.owner.toString()
    );
  }
}

module.exports = BasePolicy;
`,
  "src/index.js": `const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectToDatabase = require("../config/database");
const authRoutes = require("./routes/auth");
const { NotFoundError } = require("./utils/errors");
const errorHandler = require("./middlewares/error-handler");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Plug shared middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Add routes
app.use("/api/auth", authRoutes);

// Root page
app.get("/", (req, res) => {
  res.send("🚀 Welcome to your Express API!");
});

// Handle unexisting routes with NotFoundError
app.all("*", (req, res, next) => {
  next(new NotFoundError("This route does not exist"));
});

// error handler middleware must be after the routes
app.use(errorHandler);

const startServer = async () => {
  await connectToDatabase();

  try {
    app.listen(process.env.PORT, () => {
      console.log("🚀 Server started on port", process.env.PORT);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
`,
  ".env": `DB_NAME=${projectName}
MONGODB_URI=mongodb://localhost:27017/${projectName}
JWT_SECRET=mon_super_secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
PORT=3000`,
  "README.md": `# ${projectName}
Un projet API Express.js généré avec *express-new*.

## 🚀 Lancer le projet

1. Installer les dépendances :
   \`\`\`sh
   npm install
   \`\`\`

2. Configurer l'environnement :
   - Modifier le fichier \`.env\` selon votre setup.

3. Démarrer le serveur :
   \`\`\`sh
   npm start
   \`\`\`

## 📌 Structure

- **config/** : Connexion MongoDB
- **src/controllers/** : Logique des routes
- **src/models/** : Modèles Mongoose
- **src/routes/** : Définition des routes
- **src/middlewares/** : Middlewares Express
`,
};

// 📌 Écrire les fichiers
Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(projectPath, filePath), content);
});

// 📌 Étape 5 : Lancer `npm install` à la fin
console.log("🎉 Projet généré avec succès !");
console.log(`📂 Accédez à votre projet : cd ${projectName}`);
console.log("🚀 Lancez le serveur : npm start ou npx nodemon src/index.js");
