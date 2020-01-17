- [ ] Why would you use class component over function components (removing hooks from the question)?

before hooks, class components utilized lifecylce methods for what useState and useEffect() do.

- [ ] Name three lifecycle methods and their purposes.
componentDidMount() - once the component renders, component did mount is a place to setState.

componentDidUpdate() - performs some action when the state changes in the middle of an interaction.

componentWillUnmount- invoked immediately before a component is unmounted performs any necessary clean up from timers, network request and subscriptions.

- [ ] What is the purpose of a custom hook?

for reusability, custom hooks help provide a way to have reusable stateful logic, however the state and effects inside each custom hook vary on the type of data being impletemented

- [ ] Why is it important to test our apps?

for bugs/errors, to be ahead of where bugs might happen, actively find errors in your code and fix any holes you may have in your code ahead of time.  