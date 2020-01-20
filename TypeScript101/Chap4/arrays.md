## Arrays

### To define an array containing only one type,

you would show it as: `string[]`, `number[]`, etc
TypeScript also infers a string type as shown by hovering over `carMakers`.

```tsx
const carMakers = ["ford", "toyota", "chevy"];
```

You should see `carMakers: string[]` when hovered over in your IDE

```tsx
const dates = [new Date(), new Date()];
```

You should see 'Date[]' as the type of the `dates` constant

```tsx
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];
```

An array of string arrays can be shown as `string[][]`

TypeScript can help with inference when extracting values. Both `car0` and `myCar` carry a type from the parent carMakers array.

```tsx
const car0 = carMakers[0];
const myCar = carMakers.pop();
```

This also prevents incompatible values
`carMakers.push(100);`
will not work

Inference also helps with `map`

```tsx
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
```

For flexible types, you can use multiple types in the definition.

```tsx
const importantDates: (number | Date | string)[] = [
  new Date(),
  "2030-10-10",
  2019
];
```

The type becomes '(number | Date | string)[]'
This is also inferred if you leave the array type undefined, which you can see by hovering over the 'importantDates2' constant in the Sample file.

```tsx
const importantDates2 = [new Date(), "2030-10-10"];
```
