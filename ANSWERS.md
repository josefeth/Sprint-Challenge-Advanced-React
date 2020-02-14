- [ ] Why would you use class component over function components (removing hooks from the question)?
- [ ] Name three lifecycle methods and their purposes.
- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?

1. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element.

2. 
render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.

componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls.

componentDidUpdate() This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.

3. Custom Hooks are a mechanism to reuse stateful logic, such as setting up a subscription and remembering the current value, but every time you use a custom Hook, all state and effects inside of it are fully isolated.

4. Testing determines whether the app can be successfully downloaded, executed and interacted with the supporting back-end content infrastructure. It's a vital factor in the development process that brings to market the high-quality product. Real device testing. It helps to guarantee an in-depth analysis of functionality.


