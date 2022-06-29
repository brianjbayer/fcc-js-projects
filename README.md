# Solutions: JavaScript Algorithms and Data Structures Projects
This repository contains my solutions to the
[JavaScript Algorithms and Data Structures Projects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects)
in the [freeCodeCamp](https://www.freecodecamp.org/) course
[JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/).

These solutions are implemented in NodeJS using the
[Jest](https://jestjs.io/) testing framework to verify
them.

[ESlint](https://eslint.org/) is included in the project to provide
linting and ensure proper code style.

Although this project can be run locally natively it is intended to be
run in a Docker container based on the standard (latest) node image.

## Building a Running Using Docker
The supplied multi-stage Dockerfile contains both a Deployment image
and a Development Environment image.

### Building and Running the Deployment Image
To build the Deployment image...
  1. Ensure that Docker is installed and running
  2. Build the Deployment image
     ```
     docker build --no-cache -t app-deploy .
     ```

To run the Deployment image which runs all the tests by default...
  1. Ensure that Docker is installed and running
  2. Run the Deployment image
     ```
     docker run --rm app-deploy
     ```

### Building and Running the Development Environment Image
To minimize local native setup and provide consistency a simple
Development Environment image is included.  The Development Environment
image does require the project source code to be Docker volume mounted.

To build the Development Environment image...
  1. Ensure that Docker is installed and running
  2. Build the Development Environment image
     ```
     docker build --no-cache --target devenv -t app-devenv .
     ```

To run the Development Environment image...
  1. Ensure that Docker is installed and running
  2. Ensure that the project directory is the current working directory
  3. Run the Development Environment image mounting in the current directory
     ```
     docker run -it --rm -v $(pwd):/app app-devenv
     ```

> **NOTE:** Because the source is volume mounted and the default
> location for the `node_modules` directory is the project directory,
> a `npm install` is required for the Development Environment container.
> A `npm install` is done as part of the entry point `CMD` for the
> Development Environment image.

## Commands for Running the Tests and Linting
  * To run the tests, use the 
    [`npm test`](https://docs.npmjs.com/cli/v8/commands/npm-test)
    command (e.g. `npm test` to run all the tests)

  * To run linting, use the 
    [`npx eslint`](https://eslint.org/docs/latest/user-guide/command-line-interface)
    command (e.g. `npx eslint .` to lint all of the files)
