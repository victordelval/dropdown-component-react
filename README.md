
## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)


## Short Description
The objective of the project is to create a dropdown component with React.

For the loading of data in the dropdown to work, you can use the [simple-nodejs-server](https://github.com/victordelval/simple-nodejs-server) project that starts an http server on port 9000, serving the list of countries required.


## Project Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Development dependencies:
```
  "devDependencies": {
    "enzyme": "^3.3.0",
    "react-addons-test-utils": "^15.6.2"
  },
```

Production dependencies:
```
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.0"
  },
```




## Project Structure

The code of the application, the "src" folder, is organized in the following directories:

```
src/
  components/
    Dropdown/
      Dropdown.css
      Dropdown.js
      Dropdown.test.js
      index.js
  containers/
    CountriesContainer/
      CountriesContainer.js
      index.js
  index.css
  index.js
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` to include a coverage report.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!
