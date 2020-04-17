#!/usr/bin/env sh

# abort on errors
set -e

git config user.name "tomieric"
git config user.email "tomieric@gmail.com"

# navigate into the build output directory
cd vue-component-template

git init
git add -A
git commit -m "deploy"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push --force --quiet "https://github.com/tomieric/vue-component-template.git" master:gh-pages

cd -