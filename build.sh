#!/bin/bash

# Exit on any error
set -o errexit

# Install frontend dependencies and build the static site
echo "Building frontend..."
cd frontend
yarn install
yarn build
cd ..

# Install backend dependencies
echo "Installing backend dependencies..."
pip install --no-cache-dir -r backend/requirements.txt
