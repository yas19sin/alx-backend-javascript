# 0x01. ES6 Promises

This project focuses on understanding and using Promises in JavaScript (ES6).

## Requirements

* Ubuntu 18.04 LTS
* NodeJS 12.11.x
* Jest 24.9.x
* ESLint 6.4.x

## Setup

1. Install NodeJS 12.11.x:

    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

2. Install project dependencies:

    ```bash
    npm install
    ```

## Files

* `0-promise.js`: Exports `getResponseFromAPI` which returns a simple Promise.
* `1-promise.js`: Exports `getFullResponseFromAPI` which returns a Promise that resolves or rejects based on a boolean argument.
* `2-then.js`: Exports `handleResponseFromAPI` which attaches `.then`, `.catch`, and `.finally` handlers to a Promise.
* `3-all.js`: Exports `handleProfileSignup` which uses `Promise.all` to handle multiple promises from `utils.js`.
* `4-user-promise.js`: Exports `signUpUser` which returns a resolved Promise with user data.
* `5-photo-reject.js`: Exports `uploadPhoto` which returns a rejected Promise.
* `6-final-user.js`: Exports `handleProfileSignup` which uses `Promise.allSettled` to handle multiple promises.
* `7-load_balancer.js`: Exports `loadBalancer` which uses `Promise.race`.
* `8-try.js`: Exports `divideFunction` which performs division or throws an error.
* `9-try.js`: Exports `guardrail` which executes a function, catches errors, and manages a queue.
* `100-await.js`: Exports `asyncUploadUser` which uses `async/await` to handle promises from `utils.js`.
* `utils.js`: Utility functions `uploadPhoto` and `createUser` returning Promises.
* `package.json`: Project configuration and dependencies.
* `babel.config.js`: Babel configuration.
* `.eslintrc.js`: ESLint configuration.
* `*-main.js`: Main files for testing each task's function.

## Usage

* Lint check: `npm run lint` or `npm run check-lint`
* Run tests (using main files): `npm run dev <filename>` (e.g., `npm run dev 0-main.js`)
* Run Jest tests: `npm run test`
* Run full check (lint + Jest): `npm run full-test`
