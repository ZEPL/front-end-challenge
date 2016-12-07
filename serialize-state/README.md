SerializeState
==============

**SerializeState** is a react-redux application/component that can be combined
with any application to serialize, store and set its state using a clipboard,
so that you can basically time travel through the application.

## Installation instructions

  * Install nodejs + npm latest: https://nodejs.org/en/download/
  * Clone this repository and cd into 'serialize-state'
  * Run `npm install`

## Demo

  * Run `npm run webpack-server`
  * Open `localhost:8080` in web browser

## Development mode

  * Run `npm run dev` for auto building

## Tests

  * Run `npm test`

## Wishlist

  * Hot reload

<==============================================================================>

Front-end engineer challenge
============================
This challenge is designed to assess the ability of a front-end candidate to
write component-based UIs with serilizable application state. This can be useful in
QA, e.g. the whole app state can be saved, sent to developers and restored to reproduce bugs.

## Submission instructions
1. Fork this repository on github.
2. Complete the project as described below within your fork.
3. Keep the commit history - don't squash.
4. Push all of your changes to your fork on github and submit a pull request to this repository.

## Project description
Write a higher-order component that renders arbitrary component tree as children. This
higher-order component should have an input box and two buttons. When clicked,
the first button will serialize the full state of the application and copy it to the
clipboard. This state then can be pasted to the input box and reset the current
application state on the click of the second button.

Refer to the image below for a simple example. Black border represents the
parent component that you need to develop. Red border represents an example of
arbitrary children which state your component should to be able to save and reset.

[![example](https://github.com/NFLabs/front-end-challenge/blob/master/serialize-state/example.gif)](https://github.com/NFLabs/front-end-challenge/blob/master/serialize-state/example.gif)


## Implementation instructions
Use any technology you want that supports component-based UI development.

## Evaluation criteria (in order of importance)
1. Code organization
2. Code readability (including comments)
3. Commit history - structure and quality
4. Test coverage
