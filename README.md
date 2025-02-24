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

### 🛠 Générer un projet Express.js avec `express-new`
```sh
express-new mon-projet
```

Cela va générer un projet backend **Express.js** préconfiguré dans le dossier `mon-projet`.

---

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



