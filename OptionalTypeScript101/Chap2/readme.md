## Annotating Functions

### In TypeScript we need to define our function inputs and ouputs. There are two ways we can do this.

Take this sample function below. We can annotate our arguments like normal variables, and then annotate the output after the argument list.

```tsx
const add = (a: number, b: number): number => {
  return a + b;
};
```

or we could annotate the constant instead:

```tsx
const subtract: (a: number, b: number) => number = (a, b) => {
  return a - b;
};
```

or:

```tsx
function divide(a: number, b: number): number {
  return a / b;
}
```

It doesn't matter the arithmatic inside the function, if you do not return a number TypeScript will know :flushed: and you will recieve an error.

### If your function doesn't return anything,

perhaps just changes a variable, you can define the output type as `void`

```tsx
const logger = (message: string): void => {
  console.log(message);
  // Returns nothing (void)
  return null;
  // Can also be used to return 'null' but not necessary
};
```

### `never` is used in the event a function will never complete,

such as throwing an error

```tsx
const throwError = (message: string): never => {
  // We will never reach the end of this function, as 'throw' ends it
  throw new Error(message);
};
```

### Objects and destructuring

```tsx
const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
  // It'd be nice to destructure out date and weather so we can use 'date' and 'weather' instead of 'forecast.date' and 'forecast.weather'
};
```

### With ES2015 destructuring, the function would look like this:

```tsx
const logWeather2 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};
```

To define the expected types using ES2015 destructuring, just replace `forecast` with the destructuring from above

```tsx
const logWeather3 = (forecast: { date: Date; weather: string }): void => {
console.log(forecast.date)
```

Becomes:

```tsx
const logWeather3 = ({ date, weather }: { date: Date; weather: string }): void => {
console.log(date)
```

and with proper formatting:

```tsx
const logWeather3 = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
```

## Generic Functions

Often times you'll run into the scenario where you'd like to create a function that will be used in many places but are not sure what exactly will be passed into the function. A perfect example of this would be something like an `echo` function:

```tsx
function echoThis(input) {
  return input;
}

console.log(echoThis(1)); // 1
```

Because we're not certain of what will eventually be passed in, we cannot annotate this function.
What can be done to circumvent this issue is to pass is in what's called a "type variable" whenever we call our function. Firstly, we'll add something in arrows before the arguments, the annotate the input and output the same:

```tsx
function echoThis<typeVar>(input: typeVar): typeVar {
  return input;
}
```

now, whenever we call this function, we can specify what type will actually be going into the function:

```tsx
function echoThis<typeVar>(input: typeVar): typeVar {
  return input;
}

console.log(echoThis<number>(1)); // 1
console.log(echoThis<string>("hello")); // 'hello'
```

Similarly, if we're passing in an object, class, or something more complex, we can create an interface for that object or class and pass that to our function as the type variable.

```tsx
var shape = {
  color: blue,
  shape: square,
  height: 2
};

interface objInterface {
  color: string;
  shape: string;
  height: number;
}

function echoThis<typeVar>(input: typeVar): typeVar {
  return input;
}

console.log(echoThis<objInterface>(shape)); // {color: blue, shape: square, height: 2}
```
