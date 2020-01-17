# React With TypeScript

Requires: React 102

## Learning Objectives

This is a short intro into using React with TypeScript. If you are unfamiliar with TypeScript, there is an optional quick intro into TypeScript included in the directory entitled "TypeScript 101"

Most of the courses will have a `Sample.ts` file to open in your IDE and follow along with

By the end of this course you will learn how to use TypeScript with React Props, State, and Functional Components.

## Online Course

Feel free to follow along with the [video course](https://redventures.udemy.com/course/TypeScript-the-complete-developers-guide/learn), although it is optional.
We will derive from Section 17, videos 254-261 - React with TypeScript

## Supplemental Material

- [A video guide to general TypeScript on the Curve](https://thecurve.redventures.com/share/asset/view/799)
- [Deep dive into React and TypeScript](https://basarat.gitbooks.io/TypeScript/docs/jsx/react.html)
- [React with TypeScript cheat sheet](https://github.com/TypeScript-cheatsheets/react-TypeScript-cheatsheet)

## Project

For the final project, I'd like you to take your React 201 Giphy project and implement TypeScript. There will be a final solution provided upon project submission

# Optional Crash Course on TypeScript

## Installation

TypeScript helps to catch errors when writing code.
TypeScript is Javascript where you've defined the 'types' you'd like your values to have.
This way, your IDE (I'm using VScode) will be able to infer types, and give you better error reporting.
One important distinction is that TypeScript compiles to PLAIN Javascript. This means that all of your TypeScript
will be invisible once compiled. Important to remember for down the road, or logic that involves TypeScript you've
written.
You will code in a .ts (TypeScript) file, compile the .ts file into a .js file and then run your .js file.

### Install TypeScript with:

> npm install -g TypeScript
> npm install -g ts-node

To execute code type `tsc` and then your file name into the terminal

> tsc index.ts

This compiles the code into a file called `index.js` which you can run by typing:

> node index.js

In order to turn these two steps into one we've installed the `ts-node` package. You can compile and run your code by typing

> ts-node index.ts

## Types

[A list of Data Types](https://www.w3schools.com/js/js_datatypes.asp)

### Javascript's Data Types

- String
- Number
- Boolean
- Undefined and Null
- Function
- Object (arrays in JS are considered objects)

### Additional TypeScript types

- [Array](https://www.typescriptlang.org/docs/handbook/basic-types.html#array)
- [Tuple](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple)
- [Enum](https://www.typescriptlang.org/docs/handbook/basic-types.html#enum) (Enum's aren't available in vanilla javascipt, but are basically incremented values, a mix between a tuple and an object.)
- [Any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) (let's you tell TS a value, input or output can be arbitrary or anything)
- [Void](https://www.typescriptlang.org/docs/handbook/basic-types.html#void) (Void is most commonly used when you have a function that doesn't return a value)
- [Null](https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined)
- [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never) (Never represents values that will never occur, such as a function that throws an error, meaning it will never finish)
- [Object](https://www.typescriptlang.org/docs/handbook/basic-types.html#object) (the Object type will only accept non-primitive types)
- Union (Unions are for when a value could have more than one type. Used with | and shown as: string | number | boolean)
- Type assertions (More on this later in the course)
