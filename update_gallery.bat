echo 1. Optimization des nouvelles images...
call node scripts/optimize-images-v2.js

echo.
echo 2. Nettoyage des fichiers volumineux (JPEGs originaux)...
call node scripts/clean-public-images.js
echo Nettoyage termine.

echo.
echo 3. Sauvegarde sur GitHub...
git add .
git commit -m "Update gallery content"
git push

echo.
echo Termine ! Votre site sera mis a jour sur Cloudflare dans quelques minutes.
pause
