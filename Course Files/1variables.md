## Typescript and Variables

### You define a variable type after the variable name.

For example, we define the type of 'apples' as a number:

```
let apples = 5;
let apples: number = 5;
```

An important benefit of Typescript is the ability to hover over the variable in your IDE and see the expected type. By default, Typescript will infer the type based on the initial declaration, so the above and below both have an expected type of `number` (which you can check by hovering over `apples` or `apples2` in your IDE)

`let apples2 = 5;`

### More variables types

```
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
```

Again, all of these will be inferred if the type is not explicitly defined.

### Built in objects can also be used as a type

Typescript has many built-in interfaces (user-defined types), which we'll cover later

`let whatTimeIsItNow: Date = new Date()`;

### Arrays

```
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];
```

### Classes

```
class Car {}
let bmw: Car = new Car();
```

### Object literals

Simply define the structure of the object after the name

```
let point: { x: number ; y: number } = {
x: 10,
y: 20
};
```

### Functions

Please note that here you are annotating the Constant, not the function itself.

```
const logNumber = i => {
console.log(i);
}
```

Becomes

```
const logNumber: (i: number) => void = i => {
console.log(i);
}
```

Similar to the object literal the annotation looks like a copy of the function itself.
We're defining the input `i` as a number, then the output of the function as 'void'. Void is used when the function doesn't explicitly return a value.

### When to use annotations

#### 1. Function that returns the 'any' type

```
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
```

Because the output of the parsed json isn't type defined, when you hover over 'coordinates', the type shows as 'any'
To fix this problem, we would define the type at the constant `coordinates`. This would become:

`const coordinates2: { x: number ; y: number } = JSON.parse(json);`

Now when you hover over `coordinates`, you should see the structure of json.

#### 2. When we declare a variable on one line and initializate it later

```
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
```

#### 3. Variable whose type cannot be inferred correctly

```
let numbers = [-10, -1, 12];
let numberAboveZero;
```

here you need to specify the type can be either number or boolean by using `boolean | number`

```
let numberAboveZero: boolean | number;

for (let i = 0 ; i < numbers.length ; i++){
  if (numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}
```

### A side note on Type Assertions

Type assertions are used in scenerios when you know more about a value than TS does. Often times this comes up when converting JS to TS,
but we'll also see this later in React. For example:

```
var foo = {};
foo.bar = 123;
foo.bas = "hello";
```

You should see `bar` and `bas` have errors. When you hover over them, it says "property bar does not exist on type {}"
This is due to type inferrence built into TS. TS is saying foo is type object with zero properties, because as we demonstrated above,
in TS you need to define all the properties of the object as well as the object itself.
To resolve this, we create an interface (a user-defined type) and Type Assert it. Basically we're overwriting TS and telling it
we know more about this object than you can infer.

```
interface Foo {
  bar: number;
  bas: string;
}

var two = {} as Foo;
two.bar = 123;
two.bas = "hello";
```

Now our Bar and Bas properties have no errors! Again, you'll see this later on in the React part of the course.
