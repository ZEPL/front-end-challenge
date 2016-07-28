Front-end engineer challenge
============================
This challenge is designed to assess the ability of a front-end candidate to solve
real-world problems using our current technology stack. While the difficulties
arising during this project are real, the project itself is a mock and will not
be used by us for business purposes.

## Submission instructions
1. Fork this repository on github.
2. Complete the project as described below within your fork.
3. Keep the commit history - don't squash.
4. Push all of your changes to your fork on github and submit a pull request to this repository.

## Project description
Make a simplified slack clone.

Structure:

1. sidebar on the left:
  + list of channels
    + add / remove button
  + list of users - direct messages
2. chat window on the right
  + list of messages
    + each message
      + avatar
      + username
      + timestamp
      + message
      + edit / remove button
  + comment box

## Implementation instructions:
1. use placeholders (both UI elements and actions / reducers) in place of features you didn't have time to implement - overall code organization and project structure are more important than implementation details;
2. simplistic design will be completely acceptable - don't waste much time on it
3. mock channels and users
4. mock short history of conversations in channels / direct messages
5. store everything in memory only (no need to persist data), but mock ajax calls and make these calls asyncrounous
6. map as many app states as possible to routes to promote sharing (e.g. have permalinks for each message)
7. strive for [good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages)

## Essential technology stack
1. [npm](https://www.npmjs.com) as package manager
2. [npm scripts](https://docs.npmjs.com/misc/scripts) as automation tool
3. [webpack](http://webpack.github.io) as bundler (+ loaders & plugins)
4. [babel](https://babeljs.io) for ES6/7 to JS compilation
5. [react](https://facebook.github.io/react) (+ jsx)
6. [redux](http://redux.js.org) (+ middleware)
7. [react-router](https://github.com/reactjs/react-router)
8. [lodash](https://lodash.com) ([lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is encouraged)
9. [immutable.js](http://facebook.github.io/immutable-js) or [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)
10. [mocha](http://mochajs.org) + [chai](http://chaijs.com) + [enzyme](http://airbnb.io/enzyme/) for testing

Remarks:
+ Use es6 or later, do not use es5. Use webpack babel loader.
+ Use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for ajax. No need to implement backend - mock response data and simulate latency (e.g. with `setTimeout`)
+ Do **not** use jquery.
+ Use vanilla css or sass (complile to css via webpack sass loader).
+ Use airbnb stylesguides for [ES6](https://github.com/airbnb/javascript),
[react](https://github.com/airbnb/javascript/tree/master/react), and [css](https://github.com/airbnb/css)

## Evaluation criteria (in order of importance)
1. Code organization
2. Code readability (including comments)
3. Adherence to the tech stack described above
4. Commit history - structure and quality
5. Completeness
6. Test coverage
