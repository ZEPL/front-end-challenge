# Foreword

This project have been developed following an NFLabs challenge for its hiring process. The app is a front-end only slack clone.

A live version is available here: [react-slack.heroku.com](http://react-slack.herokuapp.com/)

You can read the original instructions [here](INSTRUCTIONS.md).

# Usage

## Short Version

Type
```
npm install
npm start
```
Open [http://localhost:8080/](http://localhost:8080/)

## Long Version

### Install

First you should install the dependencies by running
`npm install`.

### Bundling

You can bundle the source files into a single javascript file by running
`npm run bundle`

### Test

The tests can be run by typing `npm run test`.

Additionally use `npm run test:watch` for continuous testing while coding.

### Linting

#### Javascript

You can lint the code manually by running
`npm run lint`.
Continuous linting via your favorite editor is recommended.

#### CSS

CSS linting is done following airbnb styleguides for SCSS (a superset of CSS). There is no pre-processing or transpiling on the project vanilla CSS. It is simply linted using [scss-lint](https://github.com/brigade/scss-lint).

There is no CSS linting automation, please follow [scss-lint](https://github.com/brigade/scss-lint) instructions if you want to lint your vanilla CSS (you will need ruby). A linting plugin for your favorite editor is recommended.

The linting rules are the one linked in the instructions ([airbnb css styleguides](https://github.com/airbnb/css)) with some additions due to vanilla CSS lack of advanced features:
+ ColorVariable: Disabled
+ VendorPrefix: Disabled
+ MergeableSelector: Disabled
+ Comment : Disabled

### Running a local Webserver

You can start a local server by running
`npm run webserver`

# Project Structure

## File Tree

```
├── INSTRUCTIONS.md
├── README.md
├─┬ app
│ ├─┬ actions
│ │ ├── index.js
│ │ ├── message.js
│ │ ├── room.js
│ │ ├── session.js
│ │ └── types.js
│ ├─┬ api
│ │ ├── database.js
│ │ ├── db.json
│ │ ├── delete.js
│ │ ├── get.js
│ │ ├── index.js
│ │ ├── post.js
│ │ └── put.js
│ ├─┬ components
│ │ ├─┬ container
│ │ │ ├── channel-row.js
│ │ │ ├── channel-table.js
│ │ │ ├── channel.js
│ │ │ ├── comment-box.js
│ │ │ ├── home.js
│ │ │ ├── index.js
│ │ │ ├── message-entry.js
│ │ │ ├── message.js
│ │ │ └── user-row.js
│ │ ├─┬ presentational
│ │ │ ├── chat-window.js
│ │ │ ├── index.js
│ │ │ ├── loading.js
│ │ │ ├── message-list.js
│ │ │ ├── sidebar.js
│ │ │ ├── user-table.js
│ │ │ └── welcome.js
│ │ └── prop-types.js
│ ├── index.js
│ ├─┬ reducers
│ │ ├── index.js
│ │ ├── message.js
│ │ ├── room.js
│ │ └── session.js
│ ├── router.js
│ └── store.js
├── index.html
├─┬ mock-database
│ └── main.js
├── package.json
├─┬ public
│ ├── favicon.ico
│ ├─┬ img
│ │ ├── avatar-0.png
│ │ ├── ...
│ │ ├── avatar-7.png
│ │ └── logo.png
│ └── style.css
├─┬ test
│ ├─┬ components
│ │ ├── container.js
│ │ └── presentational.js
│ ├── setup.js
│ └── state.json
└── webpack.config.js
```

## Dependencies

All dependencies are listed under dev-dependencies in package.json

### Bundler
- _webpack_: Webpack
- _webpack-dev-server_: Webpack dev server


### Transpiler
- _babel-core_: Babel
- _babel-loader_: Babel loader for webpack
- _babel-preset-es2015_: Babel es2015 preset
- _babel-preset-react_: Babel react preset

### Virtual DOM framework
- _react_: React
- _react-dom_: React DOM

### State Container
- _redux_: Redux
- _react-redux_: React bindings

### Linter
- _eslint_: Javascript Linter
- _eslint-loader_ : ESLint loader for webpack
- _eslint-plugin-react_: Linting react
- _eslint-config-airbnb_: Airbnb guidelines
- _eslint-plugin-jsx-a11y_: Linting jsx
- _eslint-plugin-import_: Linting imports

### Mocking database
- _babel-cli_: For running the database generator directly in ES6.
- _chance_: A generator of random strings, numbers, etc.

### Utilities
- _lodash_: Utility library
- _immutable_: Immutable Data Collections

### Test framework
- _mocha_: Testing framework.
- _chai_: Assertion library.
- _enzyme_: Dom manipulation library.
- _chai-enzyme_: Chai - Enzyme bindings.
- _jsdom_: Simulating the DOM in javascript for testing.
