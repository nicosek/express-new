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
<br>


## 🛠 Utilitaires - Outils pratiques intégrés

L’application `express-new` fournit plusieurs **utilitaires essentiels** pour simplifier le développement.  
Ils permettent notamment de **gérer les erreurs, formater les données ou interagir avec des services externes**.

<details>
<summary>📌 Voir la section complète sur les outils pratiques</summary>

---

### 🚨 Gestion des erreurs - `errors.js` & `mongo_errors.js`

Une **API bien conçue** doit **gérer proprement les erreurs** pour garantir une expérience utilisateur fluide et éviter d’exposer des informations sensibles.

<details>
<summary>Détail</summary>

L’application inclut un système **centralisé** qui :
- ✅ Fournit **des classes d’erreurs personnalisées** (`NotFoundError`, `BadRequestError`, etc.).
- ✅ Gère **automatiquement les erreurs MongoDB** (ex: contraintes d’unicité, erreurs de validation).
- ✅ Fonctionne de pair avec [`error-handler.js`](#-error-handlerjs---gestion-centralisee-des-erreurs) pour capturer toutes les erreurs et les transformer en réponses cohérentes.

---

### 📌 `errors.js` - Une hiérarchie d’erreurs cohérente

Au lieu de retourner de simples messages `"Erreur 404"`, chaque type d’erreur a une **classe dédiée** qui :  
✔ **Associe un code HTTP clair (`404`, `400`, `401`, etc.)**  
✔ **Offre des messages explicites et dynamiques**  

Exemple :  
Si un utilisateur demande une ressource inexistante (`GET /users/99999`) :

```json
{
  "message": "User not found"
}
```
🔹 **Avec `errors.js`, le code est plus lisible et les erreurs sont uniformisées.**

---

### 🔄 `mongo_errors.js` - Mapping automatique des erreurs MongoDB

MongoDB génère des erreurs spécifiques (`ValidationError`, `CastError`, `11000` pour les duplications).  
Le fichier `mongo_errors.js` les **transforme automatiquement** en erreurs API claires.

Exemple :  
Si un utilisateur tente de s’inscrire avec un email déjà utilisé :

```json
{
  "message": "User with this email already exists"
}
```
✅ **Sans intervention du développeur, l’erreur MongoDB devient une réponse API structurée et compréhensible.**

---

### 📌 Résumé des utilitaires d'erreurs

| 🛠 Fichier | 📌 Rôle |
|-----------|--------------------------------------------------|
| `errors.js` | Définit des classes d’erreurs personnalisées pour l’API |
| `mongo_errors.js` | Associe les erreurs MongoDB aux erreurs HTTP correspondantes |
| `error-handler.js` | Capture et gère toutes les erreurs de manière uniforme (cf. section middlewares) |

✅ **Gestion d'erreurs claire et centralisée**  
✅ **Réduction du code répétitif**  
✅ **Protection contre les messages d’erreurs sensibles en production**  

---

🔥 **Avec ces outils, la gestion des erreurs est fluide et optimisée !** 🚀
</details><br>

### ☁️ Gestion des fichiers - `cloudinary.js`

L’application `express-new` inclut un **utilitaire prêt à l’emploi** pour gérer l’upload et la suppression d’images via **Cloudinary**.

<details>
<summary>Détail</summary>

---

### 📌 Pourquoi utiliser Cloudinary ?
Cloudinary est un service d’hébergement d’images qui permet de :
- 📤 **Uploader des fichiers** et obtenir une URL immédiatement exploitable.
- 🎨 **Optimiser et transformer** les images à la volée.
- ⚡ **Éviter le stockage d’images sur le serveur** (gain de performance et d’espace).

📌 **Dans `express-new`, Cloudinary est directement configuré et utilisable sans setup supplémentaire.**

---

### 🛠 `cloudinary.js` - L’utilitaire d’upload et suppression d’images

Le fichier `cloudinary.js` fournit **deux fonctions essentielles** pour interagir avec Cloudinary :

| Fonction | 📌 Rôle |
|------------------|--------------------------------------------------|
| `uploadImage(file, folder)` | Upload un fichier vers Cloudinary et retourne son URL |
| `deleteImage(publicId)` | Supprime un fichier stocké sur Cloudinary |

---

### 📤 `uploadImage(file, folder)` - Envoi d’une image

Cette fonction :
✔ **Prend en entrée un fichier temporaire** (ex: uploadé via un formulaire).  
✔ **Envoie le fichier à Cloudinary**, dans un dossier défini.  
✔ **Retourne l’URL de l’image hébergée**.  

**Exemple d’utilisation dans un contrôleur** :
```javascript
const { uploadImage } = require("../utils/cloudinary");

router.post("/upload", async (req, res) => {
  try {
    const imageData = await uploadImage(req.files.image, "avatars");
    res.json({ url: imageData.url });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
});
```

📌 **L’image est automatiquement stockée et accessible via Cloudinary.**

---

### ❌ `deleteImage(publicId)` - Suppression d’une image

Cette fonction permet de **supprimer un fichier stocké sur Cloudinary** via son `publicId`.

**Exemple d’utilisation** :
```javascript
const { deleteImage } = require("../utils/cloudinary");

router.delete("/image/:id", async (req, res) => {
  await deleteImage(req.params.id);
  res.json({ message: "Image deleted successfully" });
});
```

✅ **Les fichiers inutilisés ne restent pas stockés indéfiniment sur Cloudinary.**  
✅ **Simplifie la gestion des images en mode dynamique.**

---

### 🚀 Configuration automatique

Dans `express-new`, **les variables Cloudinary sont déjà préconfigurées** dans `.env` :

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

📌 **Une fois ces valeurs renseignées, l’upload fonctionne immédiatement !**

---

### 🔎 Résumé des fonctionnalités Cloudinary

| ☁️ Fonctionnalité | 📌 Avantage |
|------------------|--------------------------------------|
| **Upload d’images** | Stockage sur Cloudinary, URL accessible immédiatement |
| **Suppression d’images** | Nettoyage simple des fichiers inutilisés |
| **Préconfiguration** | Fonctionne dès le lancement du projet |
| **Optimisation CDN** | Chargement rapide et transformations d’image automatiques |

---

🔥 **Grâce à `cloudinary.js`, la gestion des fichiers est simple et efficace !** 🚀
</details>
</details>
<br>

## 🚀 Créer une ressource de A à Z avec `express-new`

L’objectif de cette section est de **montrer concrètement comment ajouter une nouvelle ressource** dans un projet généré avec `express-new`.

<details>
<summary>📌 Voir la section complète</summary>

Nous allons implémenter un **CRUD complet** pour une ressource `Product`, en respectant **les bonnes pratiques** et en utilisant **les middlewares et utilitaires existants**.

📌 **Ce que vous allez apprendre :**
- ✅ Ajouter un **modèle Mongoose** (`Product.js`) pour stocker les données et gérer la logique métier.  
- ✅ Définir des **routes API REST** pour manipuler cette ressource.  
- ✅ Implémenter un **contrôleur** qui traite les requêtes et délègue la logique métier au modèle.  
- ✅ Sécuriser les actions avec **l’authentification JWT et les policies d’autorisation**.  
- ✅ Tester l’API avec **Postman**.

> **💡 Pourquoi ce tutoriel ?**  
> Il vous montre **la structure et le fonctionnement** d’une API Express.js bien organisée, tout en utilisant `express-new` **de manière optimale**.

---

### 📌 Plan du tutoriel :
1️⃣ **Définition du modèle `Product`** (MongoDB + Mongoose)  
2️⃣ **Création des routes REST** (`GET`, `POST`, `PUT`, `DELETE`)  
3️⃣ **Implémentation du contrôleur (`product_controller.js`)**  
4️⃣ **Ajout de l’authentification et de l’autorisation**  
5️⃣ **Tests et validation avec Postman**  

🔥 **À la fin, vous aurez un CRUD fonctionnel et sécurisé !** 🚀

---

### 🏗 **1. Définition du modèle `Product`**
<details>
   <summary>Détail</summary>

📌 **Commençons par créer un modèle simple avec Mongoose.**
### 🏗 1. Définition du modèle `Product`

La première étape consiste à définir un **modèle Mongoose** pour notre ressource `Product`.  
Il contiendra :
- **Un champ `name` (nom du produit)** avec validation.  
- **Une référence `owner`** vers un utilisateur (`User`).  
- **Des timestamps** pour suivre la date de création/modification.

---

### 📌 Implémentation du modèle `Product.js`

Dans **`src/models/Product.js`**, ajoutez :

```javascript
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom du produit est requis"],
      minlength: [3, "Le nom doit contenir au moins 3 caractères"],
      trim: true, // Supprime les espaces inutiles
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Référence au modèle User
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
```

---

### ✅ **Comprendre les validations avec Mongoose**

Mongoose permet **d’ajouter des validations** directement dans le schéma.  
📌 **Dans notre modèle `Product` :**
- **`required: true`** → Oblige à fournir un champ (ex: `name` et `owner`).
- **`minlength: 3`** → Empêche d’avoir un nom trop court.
- **`trim: true`** → Supprime les espaces superflus.

---

### 🚨 **Gestion des erreurs de validation**
Si une validation échoue, **Mongoose génère une `ValidationError`**, qui sera interceptée automatiquement par [`mongo_errors.js`](#-gestion-des-erreurs---errorsjs--mongo_errorsjs).

📌 **Exemple d’erreur JSON pour un nom trop court :**
```json
{
  "message": "Validation failed: Le nom doit contenir au moins 3 caractères"
}
```

✅ **Avec `express-new`, les erreurs sont déjà formatées proprement** !  

---

🔥 **Notre modèle `Product` est prêt !**  
📌 **Prochaine étape : Définir les routes associées.** 🚀
</details>

### 🌍 2. Définition des routes `Product`

<details>
   <summary>Détail</summary>

Les routes sont chargées **d’aiguiller les requêtes** vers le bon contrôleur.  
Nous allons créer un fichier `routes/product.js` contenant **les 5 actions CRUD classiques** :

| Méthode | Endpoint | Description | Accès |
|---------|---------|-------------|-------------|
| `GET` | `/products` | Récupérer tous les produits | Public |
| `GET` | `/products/:id` | Récupérer un produit spécifique | Public |
| `POST` | `/products` | Ajouter un nouveau produit | 🔒 Authentifié |
| `PUT` | `/products/:id` | Modifier un produit | 🔒 Propriétaire uniquement |
| `DELETE` | `/products/:id` | Supprimer un produit | 🔒 Propriétaire uniquement |

---

### 🛠 **Implémentation des routes dans `routes/product.js`**

Dans **`src/routes/product.js`**, ajoutez :

```javascript
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product_controller");
const authMiddleware = require("../middlewares/auth_middleware");
const authorize = require("../middlewares/authorize");
const Product = require("../models/Product");

// 🛍 Récupérer tous les produits (public)
router.get("/", productController.getAll);

// 🔍 Récupérer un produit spécifique (public)
router.get("/:id", productController.getOne);

// ➕ Ajouter un produit (nécessite une authentification)
router.post("/", authMiddleware, productController.create);

// 🛠 Modifier un produit (seul le propriétaire peut modifier)
router.put("/:id", authMiddleware, authorize(Product, "update"), productController.update);

// ❌ Supprimer un produit (seul le propriétaire peut supprimer)
router.delete("/:id", authMiddleware, authorize(Product, "delete"), productController.delete);

module.exports = router;
```

---

### 🔒 **Sécurisation des routes**
✅ **Les routes `POST`, `PUT` et `DELETE` nécessitent une authentification.**  
✅ **Les routes `PUT` et `DELETE` sont protégées par l’autorisation (`authorize.js`).**  
✅ **Les routes `GET` restent publiques.**

🔥 **Les routes sont prêtes !**  
📌 **Prochaine étape : Implémenter le contrôleur `product_controller.js`.** 🚀
</details>


### 🎛 3. Implémentation du contrôleur `product_controller.js`

<details>
<summary>Détail</summary>

Le **contrôleur** gère les requêtes liées aux produits et **délègue la logique métier au modèle `Product`**.

📌 **Dans `express-new`, chaque action est gérée via un contrôleur dédié.**

---

### 🛠 **Implémentation du contrôleur dans `controllers/product_controller.js`**

Dans **`src/controllers/product_controller.js`**, ajoutez :

```javascript
const Product = require("../models/Product");
const asyncHandler = require("../middlewares/async-handler");
const { NotFoundError } = require("../utils/errors");

// 📌 Récupérer tous les produits
exports.getAll = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// 🔍 Récupérer un produit spécifique
exports.getOne = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new NotFoundError(null, { modelName: "Product" }));
  res.json(product);
});

// ➕ Ajouter un nouveau produit
exports.create = asyncHandler(async (req, res) => {
  const product = await Product.create({ ...req.body, owner: req.user._id });
  res.status(201).json(product);
});

// 🛠 Modifier un produit (vérification de l’autorisation déjà faite via `authorize`)
exports.update = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) return next(new NotFoundError(null, { modelName: "Product" }));
  res.json(product);
});

// ❌ Supprimer un produit
exports.delete = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return next(new NotFoundError(null, { modelName: "Product" }));
  res.json({ message: "Produit supprimé avec succès" });
});
```

---

### 🔄 **Explication des actions**
| 🛠 Action | 📌 Description |
|------------|------------------------------------------------|
| **`getAll`** | Retourne la liste de tous les produits |
| **`getOne`** | Retourne un seul produit via son `id` (ou 404 si non trouvé) |
| **`create`** | Crée un produit **en liant l’utilisateur connecté (`req.user._id`)** |
| **`update`** | Modifie un produit existant (via `findByIdAndUpdate`) |
| **`delete`** | Supprime un produit (via `findByIdAndDelete`) |

---

### 🚀 **Bonnes pratiques appliquées**
✅ **Utilisation de `asyncHandler.js`** → Plus besoin d’écrire `try/catch` à la main.  
✅ **Gestion automatique des erreurs (`NotFoundError`)** → Plus de `if (!product) return res.status(404)...`.  
✅ **Respect de l’architecture MVC** → Le modèle gère la logique métier, le contrôleur ne fait que **traiter les requêtes**.

---

🔥 **Notre contrôleur est prêt !**  
📌 **Prochaine étape : Sécuriser les actions avec les Policies.** 🚀
</details>

### 🔐 4. Ajout de l’authentification et de l’autorisation

<details>
<summary>Détail</summary>

Nous avons défini les **routes** et le **contrôleur** pour `Product`, mais certaines actions nécessitent une **protection** :

| 🛠 Action | 🔒 Protection appliquée |
|------------|------------------------------------------------|
| **`POST /products`** | 🔑 **Authentification requise** (`authMiddleware`) |
| **`PUT /products/:id`** | 🔑 **Authentification + Vérification du propriétaire** (`authorize.js`) |
| **`DELETE /products/:id`** | 🔑 **Authentification + Vérification du propriétaire** (`authorize.js`) |

---

## 🔑 **Authentification : Déjà en place grâce aux middlewares !**

Lors de l'**étape 2**, nous avons défini nos routes en appliquant le middleware **`authMiddleware`**.  
Cela signifie que **toutes les routes sensibles sont déjà protégées** contre les utilisateurs non connectés. ✅

📌 **Petit rappel : Dans `routes/product.js`, nous avons déjà ceci :**
```javascript
router.post("/", authMiddleware, productController.create);
router.put("/:id", authMiddleware, productController.update);
router.delete("/:id", authMiddleware, productController.delete);
```

👉 **Nous n'avons rien à modifier ici !** 🎉  
✅ **Seuls les utilisateurs authentifiés peuvent accéder à ces routes**.

---

## 🛡 **Ajout des permissions avec `authorize.js` et les policies**

L’authentification seule ne suffit pas.  
Même si un utilisateur est connecté, **il ne doit pas pouvoir modifier ou supprimer** un produit **qui ne lui appartient pas**.

📌 **Nous allons donc ajouter `authorize.js` pour vérifier les permissions.**

Dans **`routes/product.js`**, **ajoutez `authorize(Product, "update")` et `authorize(Product, "delete")` :**

```javascript
router.put("/:id", authMiddleware, authorize(Product, "update"), productController.update);
router.delete("/:id", authMiddleware, authorize(Product, "delete"), productController.delete);
```

✅ **Désormais, avant d’exécuter `update` ou `delete`, `authorize.js` va vérifier les permissions de l’utilisateur.**

---

## 📜 **Création de la policy `product_policy.js`**

Nous allons maintenant créer une **policy** spécifique pour `Product`, qui **étend `BasePolicy`**.

Dans **`src/policies/product_policy.js`**, ajoutez :

```javascript
const BasePolicy = require("./base_policy");

class ProductPolicy extends BasePolicy {
  update() {
    return this.isOwner();
  }

  delete() {
    return this.isOwner();
  }
}

module.exports = ProductPolicy;
```

✅ **Cette policy empêche toute modification/suppression par un autre utilisateur**.  
✅ **L’autorisation est appliquée proprement via `authorize.js`**.

---

## 🔥 **Résumé**
| 🔒 Sécurité | 📌 Protection appliquée |
|------------|------------------------------------------------|
| **🔑 Authentification** (`authMiddleware`) | Vérifie que l’utilisateur est bien connecté (✅ Déjà en place) |
| **🛡 Autorisation** (`authorize.js`) | Vérifie si l’utilisateur a le droit d’effectuer l’action |
| **📜 Policy `Product`** | Restreint `update` et `delete` au propriétaire |

🔥 **Grâce à `express-new`, notre API est sécurisée dès le départ !** 🚀  
📌 **Prochaine étape : Tester et valider nos endpoints avec Postman.** ✅

</details>

### 🛠 5. Tester et valider les endpoints avec Postman

<details>
<summary>Détails</summary>

Notre API est maintenant **complète et sécurisée**, il ne reste plus qu’à tester chaque action !

Nous allons valider :
1️⃣ **La création d’un produit (`POST /products`)**  
2️⃣ **La récupération de la liste des produits (`GET /products`)**  
3️⃣ **La récupération d’un produit spécifique (`GET /products/:id`)**  
4️⃣ **La modification d’un produit (`PUT /products/:id`)**  
5️⃣ **La suppression d’un produit (`DELETE /products/:id`)**  

---

## 🔐 **Authentification : Obtenir un token JWT**

Avant de tester les routes protégées, nous devons récupérer un **token JWT**.  
📌 **Utilisez l’endpoint de login pour générer un token :**

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

✅ **Réponse attendue :**
```json
{
  "_id": "65a7f5e2d4c3e6b8b9fbc123",
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

> **Gardez ce token !** 🎯 Nous allons l'utiliser pour tester les routes protégées.

---

## ➕ 1. **Créer un produit (`POST /products`)**

📌 **Requête pour ajouter un produit :**
```http
POST http://localhost:3000/products
```
Headers :
```http
Authorization: Bearer VOTRE_TOKEN_ICI
Content-Type: application/json
```
Body :
```json
{
  "name": "MacBook Pro",
  "price": 2499
}
```

✅ **Réponse attendue :**
```json
{
  "_id": "65a7f6e5d4c3e6b8b9fbc456",
  "name": "MacBook Pro",
  "price": 2499,
  "owner": "65a7f5e2d4c3e6b8b9fbc123"
}
```

---

## 📌 2. **Récupérer la liste des produits (`GET /products`)**

📌 **Requête pour récupérer tous les produits :**
```http
GET http://localhost:3000/products
```

✅ **Réponse attendue :**
```json
[
  {
    "_id": "65a7f6e5d4c3e6b8b9fbc456",
    "name": "MacBook Pro",
    "price": 2499,
    "owner": "65a7f5e2d4c3e6b8b9fbc123"
  }
]
```

---

## 🔍 3. **Récupérer un produit spécifique (`GET /products/:id`)**

📌 **Requête pour récupérer un produit :**
```http
GET http://localhost:3000/products/65a7f6e5d4c3e6b8b9fbc456
```

✅ **Réponse attendue :**
```json
{
  "_id": "65a7f6e5d4c3e6b8b9fbc456",
  "name": "MacBook Pro",
  "price": 2499,
  "owner": "65a7f5e2d4c3e6b8b9fbc123"
}
```

---

## 🛠 4. **Modifier un produit (`PUT /products/:id`)**

📌 **Requête pour modifier un produit :**
```http
PUT http://localhost:3000/products/65a7f6e5d4c3e6b8b9fbc456
```
Headers :
```http
Authorization: Bearer VOTRE_TOKEN_ICI
Content-Type: application/json
```
Body :
```json
{
  "price": 2299
}
```

✅ **Réponse attendue :**
```json
{
  "_id": "65a7f6e5d4c3e6b8b9fbc456",
  "name": "MacBook Pro",
  "price": 2299,
  "owner": "65a7f5e2d4c3e6b8b9fbc123"
}
```

> ⚠️ **Vérifiez que la modification est refusée si l’utilisateur n’est pas le propriétaire !**

---

## ❌ 5. **Supprimer un produit (`DELETE /products/:id`)**

📌 **Requête pour supprimer un produit :**
```http
DELETE http://localhost:3000/products/65a7f6e5d4c3e6b8b9fbc456
```
Headers :
```http
Authorization: Bearer VOTRE_TOKEN_ICI
```

✅ **Réponse attendue :**
```json
{
  "message": "Produit supprimé avec succès"
}
```

> ⚠️ **Vérifiez que la suppression est refusée si l’utilisateur n’est pas le propriétaire !**

---

## 🚀 **Notre API est totalement opérationnelle ! 🎯**

✅ **Toutes les fonctionnalités ont été testées et validées avec Postman.**  
✅ **L’authentification et l’autorisation fonctionnent correctement.**  
✅ **Les erreurs sont bien gérées (`401 Unauthorized`, `403 Forbidden`, `404 Not Found`).**  

---

🔥 **Bravo ! Vous venez de finaliser une API Express.js sécurisée avec `express-new` !** 🚀  
💡 **Prochaine étape ? Ajouter de nouvelles fonctionnalités, comme l’upload d’images avec Cloudinary !** 🎯


</details>
</details>
