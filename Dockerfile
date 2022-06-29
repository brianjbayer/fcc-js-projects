## Dev Env Image
## docker build --no-cache --target devenv -t app-devenv .
## docker run -it --rm -v $(pwd):/app app-devenv
## Deploy Image
## docker build --no-cache -t app-deploy .
## docker run --rm -v $(pwd):/app app-deploy

### Base Image ###
FROM node AS node-base

### Builder Stage ###
FROM node-base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

### Dev Environment ###
# Before any checks stages so that we can always build a dev env
# ASSUME source is docker volumed into the image
FROM builder AS devenv
# Add git and vim at least
# Debian: At least install vim (git is already present)
RUN apt-get update && apt-get --no-install-recommends -y install vim
# Since the source (where node_modules is/should be) is mounted in
# an npm install must be done to create the container node_modules
# and then start the interactive shell
CMD npm install ; bash

### Deploy Stage ###
# FROM builder AS deploy
FROM node-base AS deploy
# Add a non-root user to run the app
RUN adduser --disabled-password --gecos '' deployer
USER deployer
WORKDIR /app
# Copy the node_modules from builder
COPY --from=builder --chown=deployer /app/node_modules /app/node_modules
# Copy the source
COPY --chown=deployer . /app/
# Overridable: Run the tests
CMD npm test
