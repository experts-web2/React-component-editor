# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`
Launch the App in story book on this URL:[http://localhost:6006/](Storybook) to view the custom component independently,
with all possible values

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `How to use this App`
At home page you will see 2 Editors.\
1- React Component Editor.\
2- Json Editor.\
You can paste the React component code into `React component editor`.\
 and press its below button `Convert to JSON` .\
It will transform that react code into JSON.

#### `Sample React Code`
- <code> `import React from 'react'
   import PropTypes from 'prop-types'    
  
  const Button = ({
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color:  PropTypes.string,
  title:  PropTypes.string.isRequired,
    }) => {
      return (
        <button className={className} style={{ color }} onClick={onClick}>      {title}    </button>
      );
    };

  Button.propTypes = {    
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color:  PropTypes.string,
  title:  PropTypes.string.isRequired,
    };
    
    Button.defaultProps = {color:  'red'};    
    export default Button;
     `</code>
     
     It will generate the JSON code .\

     - If you have valid Json and paste it into `Json Editor` .\
      and press its below button `Convert to React` .\
  It will transform that Json into React component.
### `Sample JSON Code`     
- <code>`{
  "componentName": "Button",
  "props": [
    {
      "key": "className",
      "value": " PropTypes.string"
    },
    {
      "key": "onClick",
      "value": " PropTypes.func.isRequired"
    },
    {
      "key": "color",
      "value": "  PropTypes.string"
    },
    {
      "key": "title",
      "value": "  PropTypes.string.isRequired"
    },
    {
      "key": ""
    }
  ],
  "propsDefaults": [
    {
      "key": "color",
      "value": "  'red'"
    }
  ],
  "imports": [
    "import React from 'react'",
    "import PropTypes from 'prop-types'"
  ],
  "content": "        <button className={className} style={{ color }} onClick={onClick}>      {title}    </button>      "
}`</code>

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
