#!/bin/bash
set -e

# Remove all the files and folders that are not needed
rm -rf ios/Pods
rm -rf node_modules

# Install Javascript dependencies
npm install

# Prebuild the app
npx expo prebuild

# Install native dependencies
cd android && ./gradlew clean && cd ..
npx pod-install

# Start the app
npx expo start --dev-client -c
