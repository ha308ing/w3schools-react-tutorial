# W3Schools React Tutorial

## Component Lifecycle

1. Mounting
2. Updating
3. Unmounting

\* is required, others will be called if defined

### Mounting phase - putting elements into the DOM

1. `constructor(props)`
    - called when component is initiated
    - set initial `state`
2. `getDerivedStateFromProps( props, state )`
    - set `state` based on the initial `props`
    - (updates `state` from initial before render)
    - returns state object
3. \*`render()`
4. `componentDidMount()`
    - run statements that requires that the component
      is already placed in the DOM

### Updating phase - when component is updated

1. `getDerivedStateFromProps( props, state )`
2. `shouldComponentUpdate()`
    - return a Boolean that specifies whether
      React should continue with the rendering or not
      default is true
3. \*`render()`
4. `getSnapshotBeforeUpdate( prevProps, prevState )`
    - gives access to the `props` and `state`
      before the update
      (i.e. even after the update, you can check what the values were before the update)
      requires `componentDidUpdate()` method
5. `componentDidUpdate()`

### Unmounting - when a component is removed from the DOM

1. `componentWillUnmount()`
    - is called when a component is about to be unmounted

## Hooks

There are 3 rules for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional

### useState

to track state in a component

```
const [state,setState] = useState(<initial state>)
updateState(newState) = setState( previousState => newState )
```

### useEffect

to perform side effects (e.g. fetching data, directly updating the DOM, and timers.)

`useEffect(<function>, <dependency>)`

### Context

`createContext`, `useContext`, `<context-name>.Provider`

to manage state globally

### useRef

allows to persist values between re-renders

to store mutable values and not to cause re-renders on updates

to have direct access to the DOM

### useReducer

is like `useState`, but allows to implement custom state logic

```
useReducer(<reducer>, <initial state>)
returns [<state>, <dispatch>]
```

### useCallback

returns a memoized callback function (that doesn't need to be recalculated)

to isolate resource intensive functions so that they will not automatically run on every render

only runs when one of its dependencies update

function are recreated on each render, to prevent the function from being recreated unless necessary, use `useCallback`

### useMemo

returns a memoized value

### custom hooks

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
