---------- A Crash Course on Typescript ----------
----- Installation -----
Typescript helps to catch errors when writing code.
Typescript is Javascript where you've defined the 'types' you'd like your values to have.
This way, your IDE (I'm using VScode) will be able to infer types, and give you better error reporting.
If you're using VScode, you can follow along easiest by hitting the two pane tab in the upper right hand corner.
You code in a .ts (typescript) file, compile the .ts file into a .js file and then run.
install typescript with:

//npm install -g typescript
//npm install -g ts-node

to execute code type:
tsc and then your file name into the terminal, ie: 

//tsc index.ts

this compiles the code into a file called 'index.js', which you can run by typing:

//node index.js

In order to turn these two steps into one, we've installed the 'ts-node' package. You can compile and run your code by typing:

//ts-node index.ts

----- Types -----
https://www.w3schools.com/js/js_datatypes.asp

Javascript's Data Types are as follows:
- String
- Number
- Boolean
- Undefined and Null
- Function
- Object (arrays in JS are considered objects)

Typescript adds the following type definitions:
- Array
- Tuple
- Enum
(Enum's aren't available in vanilla javascipt, but are basically incremented values, a mix between a tuple and an object.)
- Any (let's you tell TS a value, input or output can be arbitrary or anything)
- Void (Void is most commonly used when you have a function that doesn't return a value)
- Null
- Never (Never represents values that will never occur, such as a function that throws an error, meaning it will never finish)
- Object (the Object type will only accept non-primitive types)
- Union (Unions are for when a value could have more than one type. Used with | and shown as: string | number | boolean)
- Type assertions (More on this in '1variables.ts')

----- What to Expect -----
In the file '1variables.ts' we'll first look at how to assign variables' data types
'2functions.ts' will show us how to tell Typescript what types we're passing into the function and what types we're expecting out
'3objects.ts' gives us a look at how to define the types within an object and
'4arrays.ts' helps us define arrays and nested arrays
'5tuples.ts' covers tuples and use cases
'6props.tsx' starts implementing TS into React with props
'7state.tsx' will deep dive a bit into state and how React & TS initializes state
'8funcComponents.tsx' is a quick peek into to annotating functional components