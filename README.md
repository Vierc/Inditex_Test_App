# Inditex Hiring Test
This is a test project for a recruitment process that simulates a web app to listen to the 100 most popular podcasts according to the Apple list.
This project was bootstrapped with [Webpack](https://webpack.js.org/) and [react-redux](https://github.com/reduxjs/react-redux), [react-router-dom](https://github.com/remix-run/react-router) and [axios](https://github.com/axios/axios) libraries.

In order to make requests to the external api, it is necessary to access external services that do not provide JSONP or CORS headers. To do this, the API calls use [allOrigins](https://allorigins.win/).

## Runs the app in the development mode.

In the project directory, after installing the dependencies with ```npm install```, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Builds the app for production.

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

To test the production build, you can run:
### `npx serve build`

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Running Tests.

In the project directory, you can run:
### `npm test`

Launches the test runner in the interactive watch mode.\