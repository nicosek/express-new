# 🚀 express-new

## 📌 Qu’est-ce que `express-new` ?

**`express-new`** est un générateur de projet **Express.js** conçu pour démarrer rapidement un backend structuré et prêt à l’emploi.

Il inclut :
- ✅ Une **architecture modulaire et scalable**, pensée pour un développement propre et maintenable  
- ✅ Des **middlewares essentiels** pour le développement backend :  
   - Gestion centralisée des erreurs  
   - Authentification JWT  
   - Gestion asynchrone des routes  
   - Système d’autorisation avec Policies
- ✅ Des **utilitaires intégrés** pour simplifier le développement , comme **Cloudinary** (gestion simplifiée de l’upload et de l’hébergement d’images)

> **Pourquoi utiliser `express-new` ?**  
> Parce qu’il pose des bases solides en respectant les bonnes pratiques du développement backend avec **Node.js & Express**.

<br><br/>

## 🚀 Quickstart


```sh
# Clonez le projet express-new sur votre machine
git clone --depth=1 https://github.com/VOTRE-UTILISATEUR/express-new.git && cd express-new

# Lancez le script avec Node.js pour générer un projet Express.js
node express-new.js mon-projet && cd mon-projet

# Démarrez le serveur Express.js
node index.js
```

### 🔗 Tester immédiatement avec une requête HTTP :
```http
GET http://localhost:3000/
```

🔥 **Votre serveur est prêt !** Vous pouvez maintenant développer votre API. 🚀

<br><br/>

## 📂 Structure du projet

Le projet suit une **architecture modulaire et organisée**, inspirée des meilleures pratiques en développement backend avec **Express.js**.

<details>
<summary>Voici la structure générée par <strong>express-new</strong> :</summary>

```
/mon-projet
│── config/            # Configuration de l'application (ex: connexion à la DB, API externes)
│   ├── cloudinary.js  # Configuration de Cloudinary pour le stockage des fichiers
│   ├── database.js    # Connexion à la base de données MongoDB
│
│── src/               # Contient toute la logique métier de l’application
│   │── controllers/   # Gestion des requêtes HTTP et logique applicative
│   │   ├── auth_controller.js  # Contrôleur pour l'authentification
│   │
│   │── middlewares/   # Middlewares Express.js pour le traitement des requêtes
│   │   ├── async-handler.js    # Middleware pour gérer proprement les erreurs async
│   │   ├── auth_middleware.js  # Middleware d'authentification (JWT)
│   │   ├── authorize.js        # Middleware d’autorisation basé sur les policies
│   │   ├── error-handler.js    # Gestion centralisée des erreurs
│   │
│   │── models/        # Définition des schémas Mongoose pour MongoDB
│   │   ├── User.js    # Modèle utilisateur
│   │
│   │── policies/      # Système d’autorisation (façon Pundit en Ruby)
│   │   ├── base_policy.js  # Base des policies utilisées pour l’accès aux ressources
│   │
│   │── routes/        # Définition des routes de l’API
│   │   ├── auth.js    # Routes liées à l'authentification
│   │
│   │── scripts/       # Scripts utilitaires exécutables manuellement
│   │   ├── console.js # Interface REPL pour interagir avec la base de données
│   │   ├── seed.js    # Script pour insérer des données initiales (seeding)
│   │
│   │── services/      # Services dédiés aux actions métiers transversales
│   |
│   │── utils/             # Fonctions utilitaires globales
│   │   ├── cloudinary.js  # Gestion des uploads sur Cloudinary
│   │   ├── errors.js      # Définition des classes d'erreurs personnalisées
│   │   ├── format.js      # Fonctions de formatage diverses
│   │   ├── mongo_errors.js # Gestion des erreurs MongoDB
│
│── index.js           # Point d’entrée principal du serveur Express.js
│── .env               # Variables d’environnement (⚠ à ne pas commit)
│── .gitignore         # Fichiers à ignorer par Git (ex: node_modules, .env)
│── package.json       # Dépendances et scripts npm
│── package-lock.json  # Verrouillage des versions des dépendances
```
---
</details>

<!---
### **📌 Explication de l’architecture**
L’application suit **une organisation claire** où chaque dossier a un rôle bien défini :

1️⃣ **`config/`** → Centralise les fichiers de configuration (DB, Cloudinary, etc.).  
2️⃣ **`src/`** → Contient **tout le code métier** de l’application.  
   - **`controllers/`** → Gèrent la logique des requêtes HTTP.  
   - **`middlewares/`** → Middlewares Express pour authentification, erreurs, etc.  
   - **`models/`** → Définition des schémas MongoDB.  
   - **`policies/`** → Gestion fine des permissions utilisateur.  
   - **`routes/`** → Définit les routes de l’API.  
   - **`scripts/`** → Scripts utiles à exécuter manuellement.  
   - **`services/`** → Pour encapsuler la logique métier partagée.
   - **`utils/`** → Regroupe des fonctions utilitaires globales.

3️⃣ **Fichiers racine (`index.js`, `.env`, `.gitignore`...)** → Gestion du serveur et configuration.  
---
-->
<br></br>

## 🚀 Mode d'emploi

<details>
<summary>Dérouler le mode d'emploi détaillé</summary>

### 📥 Récupérer le script `express-new`
<details>
<summary>Vous pouvez récupérer le fichier du script avec Git</strong> ou <strong>cURL</strong> :</summary>

#### 🔹 Option 1 : Cloner le dépôt (Git)
```sh
git clone --depth=1 https://github.com/VOTRE-UTILISATEUR/express-new.git && cd express-new
```

#### 🔹 Option 2 : Télécharger uniquement le script (cURL)
```sh
curl -o express-new.js https://raw.githubusercontent.com/VOTRE-UTILISATEUR/express-new/main/express-new.js
```
---
</details>


### 🛠 Générer un projet Express.js

<details>
<summary>Vous pouvez générer un projet Express.js en exécutant directement le script avec <strong>Node.js</strong> :</summary>

```sh
node express-new.js mon-projet
```

Cela va créer un projet backend **Express.js** préconfiguré dans le dossier `mon-projet`.

---
</details>

#### 🔧 Rendre la commande `express-new` disponible globalement  
<details>
<summary>Si vous souhaitez pouvoir exécuter `express-new mon-projet` <strong>depuis n'importe où dans votre terminal</strong> vous pouvez ajouter le script dans un répertoire accessible via votre <strong>$PATH</strong> :</summary>

```sh
chmod +x express-new.js
mv express-new.js /usr/local/bin/express-new
```

Après cela, vous pourrez utiliser la commande raccourcie :

```sh
express-new mon-projet
```
</details>


### 🚀 Démarrer le serveur
<details>
<summary>On démarre le serveur comme ceci :</summary>

#### 📌 Méthode classique :
```sh
node index.js
```
#### 📌 Avec `nodemon` (auto-rechargement) :
```sh
npx nodemon index.js
```

#### Ou si `nodemon` est installé globalement :
```sh
nodemon index.js
```

---
</details>


### 🔗 Tester l’API avec Postman

<details>
<summary>Voici les 3 endpoints disponibles nativement :</summary>

#### 📌 Accéder à la page d’accueil (GET)
```http
GET http://localhost:3000/
```

#### 📌 Créer un utilisateur (Signup) (POST)
```http
POST http://localhost:3000/auth/signup
```

Content-Type: application/json
```json
{
  "email": "test@example.com",
  "password": "monpassword"
}
```

#### 📌 Se connecter (Login) (POST)
```http
POST http://localhost:3000/auth/login
```

Content-Type: application/json
```json
{
  "email": "test@example.com",
  "password": "monpassword"
}
```

🛠 **La réponse contient un token JWT** à utiliser pour les requêtes authentifiées.

---
</details>

🔥 **Votre serveur est opérationnel ! Vous pouvez maintenant explorer et étendre l’API.** 🚀
</details>
<br><br/>

## 🛠 Middlewares - Le cœur du traitement des requêtes

Dans Express.js, un **middleware** est une fonction qui s'exécute avant d'atteindre le contrôleur ou après la réponse.  
Il permet d'ajouter des fonctionnalités comme **l’authentification, la validation, la gestion des erreurs**, etc.

L’application générée par `express-new` inclut plusieurs **middlewares essentiels** pour **faciliter le développement et garantir un code propre**.

<details>
  <summary>📌 Voir la section complète sur les middlewares</summary>


---

### 🛠 `async-handler.js` - Gestion propre des erreurs asynchrones

Dans Express.js, une **erreur survenue dans une fonction `async` ne sera pas captée automatiquement**, ce qui peut **planter le serveur** si elle n'est pas gérée correctement.
<details>
  <summary>Détail</summary>

#### ✅ Problème sans `async-handler`
Sans gestion globale, chaque route nécessiterait **un `try/catch` manuel**, comme ceci :

```javascript
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});
```

👉 **C’est répétitif et peu élégant.**

---

#### 🚀 Solution avec `async-handler`
Le middleware **`async-handler.js`** permet d’écrire des routes **plus propres et plus lisibles** :

```javascript
const asyncHandler = require("../middlewares/async-handler");

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
  })
);
```

✅ **L’erreur est automatiquement captée et transmise au gestionnaire global** (`error-handler.js`), sans avoir besoin d’écrire un `try/catch` à chaque fois.

---

#### 📌 Pourquoi utiliser `async-handler.js` ?
✔ **Réduit la duplication du code** (plus besoin de `try/catch` partout)  
✔ **Capture automatiquement les erreurs** et les transmet au middleware d’erreur  
✔ **Facilite la lecture et la maintenance du code**  

---

### 🔎 Résumé :
| 🛠 Middleware | 📌 Rôle |
|--------------|------------------------------------------------|
| `async-handler.js` | Capture les erreurs des fonctions `async` et les transmet au gestionnaire d'erreurs |

---
</details>

### 🔑 `auth_middleware.js` - Identification de l’utilisateur via JWT

Ce middleware s’assure qu’un **utilisateur est bien authentifié** avant d’accéder à certaines routes.  
Il **ne gère pas les permissions**, il se contente **d’identifier l’utilisateur connecté** à partir de son token JWT.

<details>
  <summary>Détail</summary>

---

#### ✅ Problème sans `auth_middleware`
Sans authentification, **l’API ne sait pas qui fait la requête** :

```javascript
router.get("/profile", async (req, res) => {
  res.json({ message: "Bienvenue sur votre profil !" });
});
```
👉 **L'API ne fait aucune distinction entre un utilisateur connecté et un utilisateur anonyme.**  
👉 **On ne sait pas *qui* accède à cette route.**  

---

#### 🚀 Solution avec `auth_middleware.js`
Le middleware **`auth_middleware.js`** vérifie la présence d’un **JWT valide** et **ajoute `req.user`** pour identifier l’utilisateur.

```javascript
const authMiddleware = require("../middlewares/auth_middleware");

router.get("/profile", authMiddleware, async (req, res) => {
  res.json({ message: `Bienvenue, ${req.user.email} !` });
});
```

✅ **Si l’utilisateur n’a pas de token ou si celui-ci est invalide, il reçoit une erreur `401 Unauthorized`.**  
✅ **Si le token est valide, `req.user` est rempli avec les infos de l’utilisateur.**  

---

#### 📌 Pourquoi utiliser `auth_middleware.js` ?
✔ **Permet d’identifier l’utilisateur connecté** via JWT  
✔ **Ajoute automatiquement `req.user` pour les routes protégées**  
✔ **Bloque les requêtes non authentifiées (`401 Unauthorized`)**  
✔ **Facilite l’accès aux informations de l’utilisateur dans les contrôleurs**  

---

### 🔎 Résumé :
| 🛠 Middleware | 📌 Rôle |
|--------------|------------------------------------------------|
| `auth_middleware.js` | Vérifie l’authentification et attache `req.user` à la requête |

## 🔐 Comprendre le fonctionnement de JWT (JSON Web Token)

L’authentification dans ce projet repose sur **JWT (JSON Web Token)**, un standard permettant **d’identifier un utilisateur sans stocker de session côté serveur**.

---

### 📌 Comment fonctionne JWT ?
<details>
  <summary>Détail</summary>
Un <strong>JWT est un jeton signé</strong> qui contient des informations encodées sous forme de trois parties :

```
HEADER.PAYLOAD.SIGNATURE
```

#### 1️⃣ **Header (en-tête)**
- Indique **le type de jeton** (`JWT`) et **l’algorithme de signature** (`HS256`, `RS256`, etc.).
- Ex :  
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### 2️⃣ **Payload (charge utile)**
- Contient **les données encodées** du jeton, par exemple l’`userId` :
```json
{
  "userId": "67b96ca51d78909d570564dc",
  "iat": 1740204232,
  "exp": 1740809032
}
```
👉 **Ce payload n’est pas chiffré** → il est juste encodé en Base64, donc **facilement lisible**.  
👉 **Il ne doit jamais contenir d’informations sensibles** (ex: mot de passe).  

#### 3️⃣ **Signature**
- Permet de **vérifier l’authenticité** du jeton.  
- Générée avec un secret (`JWT_SECRET`) pour s’assurer que personne n’a modifié le token.  

---

### 🔄 Processus d’authentification avec JWT
1️⃣ **Lors de la connexion (`/auth/login`)**  
   - L’API génère un JWT et l’envoie au client :
```javascript
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
```
  
2️⃣ **À chaque requête protégée**  
   - Le client envoie son JWT dans le header `Authorization` :
```http
GET /profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR...
```

3️⃣ **Le serveur vérifie et décode le token (`auth_middleware.js`)**  
   - Si la signature est correcte et que le token n’a pas expiré, l’API **récupère `userId` et attache l’utilisateur à `req.user`**.

---

### 🎯 Pourquoi utiliser JWT ?
✔ **Stateless** : Pas besoin de stocker des sessions côté serveur  
✔ **Rapide** : Simple échange de token → moins de requêtes en base  
✔ **Sécurisé** : La signature empêche la modification du token  

---

### ⚠️ Bonnes pratiques de sécurité avec JWT
🔹 **Utiliser des tokens courts (ex: 1h) + un refresh token** pour limiter les risques.  
🔹 **Ne jamais stocker un JWT en localStorage** (risque XSS) → privilégier `httpOnly cookies`.  
🔹 **Toujours utiliser HTTPS** pour éviter le vol de tokens (MITM attacks).  
🔹 **Ne pas stocker d’informations sensibles dans le JWT** (il est lisible par tous).  

---

🔥 **Avec JWT, l’authentification est rapide, efficace et sécurisée !** 🚀
</details>
</details>

### 🔒 `authorize.js` - Gestion des autorisations avec Policies


#### 📌 Pourquoi un middleware d'autorisation ?
L’**authentification (`auth_middleware.js`)** permet d’identifier l’utilisateur, mais **ne suffit pas** pour sécuriser les accès.  
On a besoin d’un **système d’autorisation** pour définir **qui a le droit de faire quoi**.

<details>
  <summary>Détail</summary>

🔹 **Exemple concret :**  
- Un utilisateur authentifié **peut voir son propre profil**, mais **pas celui des autres**.  
- Seul un **admin** peut supprimer un utilisateur.  

C’est là qu’intervient **`authorize.js`**, qui **vérifie si l’utilisateur a les permissions requises avant d’exécuter une action**.

---

#### ✅ Problème sans `authorize.js`
Sans autorisation, **tous les utilisateurs connectés peuvent modifier n’importe quelle ressource**.

##### ❌ Suppression d’un utilisateur sans contrôle :
```javascript
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Utilisateur supprimé" });
});
```
👉 **N'importe qui peut supprimer un utilisateur** sans restriction.

---

#### 🚀 Solution avec `authorize.js`
Avec `authorize.js`, on **vérifie les permissions de l’utilisateur** avant d’exécuter l’action.

#### 🔹 Fonctionnement du middleware
1️⃣ **Récupération du modèle** et de l’objet concerné (ex: `User.findById(req.params.id)`).  
2️⃣ **Chargement de la Policy associée** (`UserPolicy`, `OfferPolicy`, etc.).  
3️⃣ **Exécution de la vérification** avec la méthode définie dans la Policy (`policy.destroy()` pour une suppression).  
4️⃣ **Si autorisé** → on continue, sinon on bloque avec une erreur `403 Forbidden`.

##### 🔧 Exemple d'utilisation :
```javascript
const authorize = require("../middlewares/authorize");
const User = require("../models/User");

router.delete(
  "/users/:id",
  authMiddleware, // ✅ Vérifie que l'utilisateur est authentifié
  authorize(User, "destroy"), // ✅ Vérifie s'il a le droit de supprimer
  async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Utilisateur supprimé" });
  }
);
```
✅ **Seul un utilisateur autorisé peut supprimer un compte**.  
✅ **La logique d'autorisation est centralisée dans une Policy**.

---

#### 🛠 Comment fonctionne `authorize.js` ?
Voici l’implémentation simplifiée du middleware :

```javascript
const { ForbiddenError } = require("../utils/errors");

const authorize = (Model, action) => {
  return async (req, res, next) => {
    // ✅ 1. Récupération de l'objet si un `req.params.id` est présent
    const record = req.params.id ? await Model.findById(req.params.id) : null;

    // ✅ 2. Chargement de la Policy associée au modèle
    const PolicyClass = require(`../policies/${Model.modelName.toLowerCase()}_policy`);
    const policy = new PolicyClass(req.user, record);

    // ✅ 3. Vérification de l'autorisation
    if (!policy[action]()) {
      return next(new ForbiddenError()); // ⛔ Erreur 403 si non autorisé
    }

    next(); // 🎯 Tout est validé, on continue
  };
};

module.exports = authorize;
```

---

### 📜 Les Policies et `base_policy.js`
Le middleware `authorize.js` repose sur un **système de Policies** pour gérer **finement les autorisations**.  

<details>
   <summary>Détail</summary>

👉 **Une Policy** est une classe qui définit **qui peut faire quoi sur une ressource donnée**.  
👉 **`base_policy.js`** sert de **classe parent**, mais **n'impose aucun comportement par défaut**.  
👉 **Chaque Policy enfant doit implémenter explicitement ses propres méthodes (`show()`, `update()`, `destroy()`, etc.)**.

---

### 📌 Comment fonctionne une Policy ?

Chaque **Policy** :
1️⃣ **Reçoit l’utilisateur (`req.user`) et la ressource (`record`)** concernée.  
2️⃣ **Hérite de `base_policy.js`**, qui offre uniquement **des outils communs**, sans forcer de logique par défaut.  
3️⃣ **Implémente explicitement les règles d’autorisation** dans chaque Policy spécifique (`user_policy.js`, `offer_policy.js`, etc.).  

---

### 🛠 Implémentation de `base_policy.js`
```javascript
class BasePolicy {
  constructor(user, record) {
    this.user = user;
    this.record = record;
  }

  // ✅ Vérifie si l'utilisateur est le propriétaire de la ressource
  isOwner() {
    return (
      this.user &&
      this.record &&
      this.user._id.toString() === this.record.owner.toString()
    );
  }
}

module.exports = BasePolicy;
```
🔹 **Aucune règle d’autorisation n’est définie dans `base_policy.js`**.  
🔹 **Les Policies spécifiques doivent implémenter leurs propres règles (`show()`, `update()`, `destroy()`, etc.).**  

---

### 🔎 Exemple d'une Policy spécifique : `user_policy.js`
Dans une Policy spécifique, on définit explicitement les **règles d’accès** :

```javascript
const BasePolicy = require("./base_policy");

class UserPolicy extends BasePolicy {
  // ✅ Seul l'utilisateur lui-même ou un admin peut voir son profil
  show() {
    return this.user && (this.isOwner() || this.user.isAdmin);
  }

  // ✅ Seul l'utilisateur lui-même peut modifier son profil
  update() {
    return this.user && this.isOwner();
  }

  // ✅ Seul un admin peut supprimer un utilisateur
  destroy() {
    return this.user && this.user.isAdmin;
  }
}

module.exports = UserPolicy;
```

---

### 📌 Résumé des Policies
| 📜 Policy | 📌 Rôle |
|-----------|--------------------------------------------------|
| `base_policy.js` | Classe parent qui fournit `isOwner()`, mais aucune règle par défaut |
| `user_policy.js` | Définit les règles d’accès pour les utilisateurs |
| `offer_policy.js` | Définit les règles d’accès pour les offres (ex: marketplace) |

✅ **Oblige les développeurs à définir explicitement les permissions**  
✅ **Évite d’avoir des permissions implicites mal comprises**  
✅ **Utilise `isOwner()` pour simplifier les vérifications courantes**  

---

🔥 **Avec `base_policy.js`, chaque Policy est claire et totalement contrôlée par le développeur !** 🚀

</details>


#### 🔎 Résumé
| 🛠 Middleware | 📌 Rôle |
|--------------|------------------------------------------------|
| `authorize.js` | Vérifie si l’utilisateur a le droit d’exécuter une action sur une ressource |

✅ **Séparation claire entre authentification (`qui ?`) et autorisation (`a-t-il le droit ?`)**  
✅ **Centralisation de la logique avec les Policies (`base_policy.js`, `user_policy.js`, etc.)**  
✅ **Facilite la maintenance et l’ajout de nouvelles règles d’accès**  

---

🔥 **Avec `authorize.js`, la gestion des permissions devient flexible et sécurisée !** 🚀
</details>

### ❌ `error-handler.js` - Gestion centralisée des erreurs

#### 📌 Pourquoi un middleware de gestion des erreurs ?
Lorsqu’une erreur survient dans Express.js, **elle doit être capturée et traitée proprement** pour éviter :
- De renvoyer des erreurs non gérées aux utilisateurs.
- D’afficher des messages sensibles en production.
- De dupliquer du code de gestion des erreurs dans chaque route.

<details>
<summary>Détail</summary>

Le **middleware `error-handler.js`** permet de **centraliser la gestion des erreurs** et d’envoyer des réponses formatées de manière uniforme.

---

#### ✅ Problème sans `error-handler.js`
Sans gestion centralisée, chaque route devrait capturer et traiter manuellement ses erreurs :

```javascript
router.get("/example", async (req, res) => {
  try {
    const data = await someAsyncFunction();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue" });
  }
});
```
👉 **C’est répétitif, peu maintenable et peut être incohérent d’une route à l’autre.**  

---

#### 🚀 Solution avec `error-handler.js`
Avec un middleware d’erreur, il **suffit de transmettre l’erreur avec `next(error)`**, et **elle sera gérée globalement**.

##### 🔹 Exemple d’utilisation dans une route :
```javascript
router.get("/example", async (req, res, next) => {
  try {
    const data = await someAsyncFunction();
    res.json(data);
  } catch (error) {
    next(error); // ✅ L'erreur est transmise au middleware global
  }
});
```
✅ **Les routes restent propres et lisibles.**  
✅ **L’erreur est capturée automatiquement et traitée de manière uniforme.**

---

#### 🛠 Fonctionnement du middleware `error-handler.js`
Le middleware capture **toutes les erreurs** et renvoie une réponse formatée.


🔎 ***Fonctionnement :***<br>
1️⃣ **Capture toutes les erreurs transmises avec `next(error)`**.  
2️⃣ **Définit un code HTTP approprié (`500` par défaut)**.  
3️⃣ **Retourne un message d’erreur structuré** pour le frontend.  

---

#### 🏆 Résumé
| 🛠 Middleware | 📌 Rôle |
|--------------|------------------------------------------------|
| `error-handler.js` | Capture et gère toutes les erreurs Express de manière uniforme |

✅ **Évite la duplication du code de gestion des erreurs**  
✅ **Améliore la clarté et la maintenabilité du code**  
✅ **Affiche des messages clairs et sécurisés en production**  

---

🔥 **Avec `error-handler.js`, la gestion des erreurs devient simple et efficace !** 🚀
</details>
</details>



