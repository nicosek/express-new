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

Voici la structure générée par `express-new` :

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
│
│── utils/             # Fonctions utilitaires globales
│   ├── cloudinary.js  # Gestion des uploads sur Cloudinary
│   ├── errors.js      # Définition des classes d'erreurs personnalisées
│   ├── format.js      # Fonctions de formatage diverses
│   ├── mongo_errors.js # Gestion des erreurs MongoDB
│
│── index.js           # Point d’entrée principal du serveur Express.js
│── .env               # Variables d’environnement (⚠ à ne pas commit)
│── .gitignore         # Fichiers à ignorer par Git (ex: node_modules, .env)
│── package.json       # Dépendances et scripts npm
│── package-lock.json  # Verrouillage des versions des dépendances
```

---

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

### 📥 Récupérer le script `express-new`
Vous pouvez récupérer le fichier du script avec **Git** ou **cURL** :

#### 🔹 Option 1 : Cloner le dépôt (Git)
```sh
git clone --depth=1 https://github.com/VOTRE-UTILISATEUR/express-new.git && cd express-new
```

#### 🔹 Option 2 : Télécharger uniquement le script (cURL)
```sh
curl -o express-new.js https://raw.githubusercontent.com/VOTRE-UTILISATEUR/express-new/main/express-new.js
```
---


### 🛠 Générer un projet Express.js

Vous pouvez générer un projet Express.js en exécutant directement le script avec **Node.js** :

```sh
node express-new.js mon-projet
```

Cela va créer un projet backend **Express.js** préconfiguré dans le dossier `mon-projet`.

---

#### 🔧 Rendre la commande `express-new` disponible globalement  
Si vous souhaitez pouvoir exécuter `express-new mon-projet` **depuis n'importe où dans votre terminal**, vous pouvez ajouter le script dans un répertoire accessible via votre `$PATH` :

```sh
chmod +x express-new.js
mv express-new.js /usr/local/bin/express-new
```

Après cela, vous pourrez utiliser la commande raccourcie :

```sh
express-new mon-projet
```


### 🚀 Démarrer le serveur

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

### 🔗 Tester l’API avec Postman

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

🔥 **Votre serveur est opérationnel ! Vous pouvez maintenant explorer et étendre l’API.** 🚀
<br><br/>
