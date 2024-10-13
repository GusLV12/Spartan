# Setup

This project uses Yarn for package management and Gulp for build automation.

### Setup HTML

We are using Gulp to automate build processes. Gulp helps streamline the development workflow by automating tasks like file minification, SASS compilation, and live reloading. You can learn more about Gulp here. Below are the steps to install and set up the prerequisites.

### Prerequisites

1. Node.js

Make sure Node.js is installed and running.

```js
node -v
```

Ensure the version is >= 18.

2. Yarn

```js
yarn -v
```

If not installed, install Yarn:

```js
npm install -g yarn
```

3. Gulp

Gulp is required to run automation tasks.

```js
gulp -v
```

If not installed, install Gulp globally:

```js
npm install -g gulp
```

## Commands

| Command       | Description                        |
|---------------|------------------------------------|
| `yarn install`| Install project dependencies       |
| `gulp`        | Runs the project locally with live reload. Accessible at <http://localhost:3000>.                                      |
| `gulp build`  | Generates the production build in the /dist directory.       |
