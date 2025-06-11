# 0x05. NodeJS Basics

This project contains various Node.js exercises focusing on basic concepts, file operations, HTTP servers, and Express.js.

## Learning Objectives

- Run javascript using NodeJS
- Use NodeJS modules
- Use specific Node JS module to read files
- Use process to access command line arguments and the environment
- Create a small HTTP server using Node JS
- Create a small HTTP server using Express JS
- Create advanced routes with Express JS
- Use ES6 with Node JS with Babel-node
- Use Nodemon to develop faster

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All files should end with a new line
- Code should use the js extension
- Code will be tested using Jest and the command npm run test
- Code will be verified against lint using ESLint
- Code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All functions/classes must be exported using: module.exports = myFunction;

## Files

- `0-console.js`: Basic function to display message in STDOUT
- `1-stdin.js`: Program that reads user input from stdin
- `2-read_file.js`: Synchronous file reading with student count
- `3-read_file_async.js`: Asynchronous file reading with student count
- `4-http.js`: Basic HTTP server using Node's http module
- `5-http.js`: More complex HTTP server with routing
- `6-http_express.js`: Basic Express server
- `7-http_express.js`: More complex Express server with routing
- `full_server/`: Complete Express application with organized structure
  - `utils.js`: Database utility functions
  - `controllers/`: Application controllers
  - `routes/`: Application routes
  - `server.js`: Main server file

## Usage

To run the development server:
```bash
npm run dev
```

To run tests:
```bash
npm run test
```

To run linting:
```bash
npm run check-lint
```

To run full test suite:
```bash
npm run full-test
```
