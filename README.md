# Marketing Data Application

## [Deployed application](https://xekven.github.io/marketing-search)

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

```
npm i
npm start
```

## Libraries used
State management:
- redux
- redux-saga
- redux-logger
  
Linting: 
- eslint (with custom config)
  
Aliases resolution:
- customize-cra
  
http requests:
- axios
  
Other useful libraries libraries:
- lodash
- react-use (custom hooks)
  
UI components:
- recharts
- antd

## Project development ideas

1. Use immer js in redux store
2. Add router & connected router
3. Test utils with jest & e2e tests with test cafe for instance
4. This is very bad scenario to fetch everything at once and do some calculations on frontend, so perfect scenario is when endpoint is implemented that will take all search parameters and return desired result, also one of the options, but worse is to use web worker to make calculations
5. Styled-components as styling solution (CSS-IN-JS)
6. And much more :P
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
