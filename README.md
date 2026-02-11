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
    - **Output directory**: `dist`

4.  **Important**: Si Cloudflare vous demande une "Deploy command" (Production ou Non-production), **LAISSEZ VIDE** ou supprimez tout texte. Le déploiement est automatique pour les sites statiques.

## 🛠️ Maintenance & Mises à jour

### Ajouter des photos
1.  Ajoutez vos fichiers originaux dans le dossier `Images/` (dans `Portrait`, `Automobile` ou `Architecture`).
2.  Double-cliquez sur `update_gallery.bat`.
3.  C'est tout ! Le script optimise les images et met à jour le site.

### Mettre à jour le CV
1.  Remplacez le fichier PDF à la racine du projet.
2.  Mettez à jour le nom du fichier dans `src/pages/CV.jsx` (si le nom a changé).
3.  Double-cliquez sur `setup_deployment.bat` ou lancez les commandes git pour envoyer les changements.

