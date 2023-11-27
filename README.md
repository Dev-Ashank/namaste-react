# namaste-react

# Parcel

- Dev Build
- Created Local build
- Automatically refresh page
- HMR Hot Module Replacement
- HMR is done with file watcher algorithm which is written in c++;
- provides faster build because of cache
- Image optimization
- Minification of file
- Compress
- Consistent hashing
- Code Splitting
- Differential Bundling - support for older browsers
- Diagnostic
- Error handling
- Https
- Tree Shaking - remove unused code
- Different DEV and Prod Build

# There is two types of export

- default export - export default Name - export without curly braces
- name export - export const name = {} - export with curly braces

# React hooks

- Normal js functions
- useState() - powerful state variables
- useEffect()

- Whenever state variable changes React rerenders the component;

- useEffect
  - take 2 arguments
    - a callback function
      - callback funciton is get called after components renders
  - a dependency array
- useEffect
  -if there in no dependency array it will called after every rendered happen of that component.
  -if dependency array is empty it will called on initial rendered(only once).
  - if dependency array is [something] whenever {something} changes my use effect will be called

- React Router
  - we get it from react-router-dom
  - createBrowserRouter
    - inside this we provide configuration of our routes
  - RouteProvider
    - It will provide createBrowserRouter configuration to our render.