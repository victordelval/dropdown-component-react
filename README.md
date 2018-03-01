
## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)


## Short Description
The objective of the project is to create a dropdown component with React using best practices. This dropdown is also searchable and multi selection.

For the loading of data in the dropdown to work, you can use the [simple-nodejs-server](https://github.com/victordelval/simple-nodejs-server) project that starts an http server on port 9000, serving the list of countries required.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Project Dependencies

Development and production dependencies:

```
  "dependencies": {
    "dotenv": "^5.0.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-scripts": "1.1.0",
    "react-test-renderer": "^16.2.0",
    "redux": "^3.7.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "enzyme": "^3.3.0",
    "react-addons-test-utils": "^15.6.2"
  }
```

### Testing the components

* **Jest**, a test runner built and maintained by Facebook (Delightful JavaScript Testing)

> * Easy Setup: Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.

> * Instant Feedback: Fast interactive watch mode runs only test files related to changed files and is optimized to give signal quickly.

> * Snapshot Testing: Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.

* **Enzyme**, by Airbnb, is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.


## Project Structure

The code of the application, the "src" folder, is organized in the following directories:

```
src/

  actions/
    actions.js

  components/
    Dropdown/
      Dropdown.css
      Dropdown.js
      Dropdown.test.js
      index.js

    LabelButton/
      index.js
      LabelButton.css
      LabelButton.js
      LabelButton.test.js

    DropdownBox/
      index.js
      DropdownBox.js

    ListItem/
      index.js
      ListItem.js
      ListItem.test.js

    LabelList/
      index.js
      LabelList.js
      LabelList.test.js

    DropdownList/
      index.js
      DropdownList.css
      DropdownList.js
      DropdownList.test.js

    SearchBox/
      index.js
      SearchBox.css
      SearchBox.js

  containers/
    MultiSearchDropdown/
      index.js
      MultiSearchDropdown.css
      MultiSearchDropdown.js
      MultiSearchDropdown.test.js

  reducers/
    reducer.js

  index.css
  index.js
  setupTests.js
  store.js
  utils.js

.env
.gitignore
package-lock.json
package.json
README.md
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` to include a coverage report.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The app is ready to be deployed!
