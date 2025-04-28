#!/bin/bash

echo "Setting safe directory..."
git config --global --add safe.directory $(pwd)

echo "Pulling remote changes..."
git pull origin main --allow-unrelated-histories

echo "Adding all changes..."
git add .

echo "Committing..."
git commit -m "Update: Auto merge and push"

echo "Pushing to remote..."
git push origin main

echo "DONE! Semua sudah ke-push ke GitHub."
