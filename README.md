# Portfolio Evan KHOUJA

Ce projet est un portfolio moderne construit avec **React**, **Vite** et **Tailwind CSS**.

## 🚀 Démarrage Rapide

1.  **Installation** :
    ```bash
    npm install
    ```
2.  **Lancement** :
    ```bash
    npm run dev
    ```

## 📦 Déploiement

### Option A: Cloudflare Pages (Recommandé)

1.  **Build** :
    Générez la version de production (déjà fait, dossier `dist/`).
    ```bash
    npm run build
    ```
2.  **Upload** :
    - Allez sur [Cloudflare Pages](https://pages.cloudflare.com/).
    - Créez un nouveau projet > **Upload Assets**.
    - Glissez-déposez le dossier `dist` situé dans votre projet.
    - C'est en ligne !

### Option B: GitHub + Cloudflare

**Méthode Automatique (Windows) :**
1.  Double-cliquez sur le fichier `setup_deployment.bat` à la racine du projet.
2.  Cela enverra automatiquement le code sur : `https://github.com/Evnooojj/khoujaevan.git`

**Méthode Manuelle :**
Si vous préférez taper les commandes :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Evnooojj/khoujaevan.git
git push -u origin main
```
3.  Sur Cloudflare Pages, connectez votre compte GitHub et sélectionnez le repo.
    - **Build command**: `npm run build`
    - **Output directory**: `dist`

## 🛠️ Maintenance

- **Images** : Ajoutez vos photos dans `public/images/` et lancez `node scripts/optimize-images-v2.js` pour mettre à jour la galerie.
- **CV** : Remplacez le fichier PDF à la racine et mettez à jour le lien dans `src/pages/CV.jsx`.

## 📄 Licence

Evan KHOUJA - Tous droits réservés.
