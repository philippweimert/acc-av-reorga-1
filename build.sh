#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -o errexit

# --- Frontend Build ---
echo "Building frontend..."
cd frontend
npm install --legacy-peer-deps
npm run build
cd ..

# --- Backend Setup ---
echo "Setting up backend..."

# Move build output to the root directory
echo "Moving frontend build to root..."
mv frontend/build ./build

# Remove the frontend source directory after build
echo "Cleaning up frontend source directory..."
rm -rf frontend

# Install backend dependencies
echo "Installing backend dependencies..."
pip install --no-cache-dir -r requirements.txt

echo "Build complete."
