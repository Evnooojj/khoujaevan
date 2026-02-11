@echo off
echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit: Portfolio Deployment"

echo Rename branch to main...
git branch -M main

echo Configuring remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Evnooojj/khoujaevan.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo Deployment script finished.
pause
