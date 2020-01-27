## Annotating a functional component

This is exactly the same as annotating a function, just with a bit different output.

In your `index.jsx` file go ahead and delete your App Component so you have the following left:

```tsx
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<App color="red" />, document.querySelector("#root"));
```

Lets make a simple functional component:

```tsx
const App = () => {};
```

Lets annotate it! Looking back at the functions file in TypeScript101, we see we need to define our inputs and output.
Because we're passing in props this will be similar to before. All we need to do is create an interface above our Component:

```tsx
interface AppProps {
  color?: string;
}
```

Go ahead and annotate your props argument as follows:

```tsx
const App = (props: AppProps) => {};
```

This function is now assumedly going to output some JSX Elements to the html, so lets annotate it as such.

```tsx
const App = (props: AppProps): JSX.Element => {};
```

By default, React & TypeScript both have an interface built in for the JSX namespace so you don't have to define your own interface.
Perfect, now once done, you should see an error because the component isn't outputting any JSX like it's been defined to, so let's add an output

```tsx
const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};
```
