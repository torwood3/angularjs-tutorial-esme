# AngularJS Tutorial Application for ESME

## Overview

This application takes the developer through the process of building a web-application using
AngularJS (v1.6+).

Each tagged commit is a separate lesson teaching a single aspect of the framework.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js](https://nodejs.org/).
- Install the tool dependencies: `npm install`

### Yeoman
- Get [Yo](http://yeoman.io/).
- Get [FoutainJS](http://fountainjs.io/) and run `yo fountain-webapp`

## Workings of the Application

- There is no dynamic backend (no application server) for this application. Instead we fake the
application server by fetching static JSON files.


## Commits / Tutorial Outline

You can check out any point of the tutorial using:

```
git checkout step-?
```

To see the changes made between any two lessons use the `git diff` command:

```
git diff step-?..step-?
```

### step-0_X _Back To Basics_
### step-1_X _Components_
### step-2_X _Services_
### step-3_X _Router_
### step-4_X _Login example_

### Installing Dependencies

The application relies upon various Node.js tools. You can install these by running:

```
npm install
```

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like and can be find into the `package.json` file.

### Running the Application during Development

- Run `npm run serve`.
- Navigate your browser to [http://localhost:3000/](http://localhost:3000/) to see the application
running.

## Application Directory Layout

```
src/                     --> all the source code of the app
  index.html             --> app layout file (the main HTML file of the app)
  index.js               --> main javascript endpoint
  index.css              --> main app styles
  app/                   --> JS folder which contains services/components/etc.
  
node_modules/...         --> development tools (fetched using `npm`)

package.json             --> Node.js specific metadata, including development tools dependencies
```

## Other tutorials
 - [AngularJS]()
 - [Angular 2+]() 
 - [ReactJS]()
