// both apples and apples2 will have a type of 'number'
// hover over the variable to see it's type.
let apples: number = 5;
// number is inferred below
let apples2 = 5;

let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let whatTimeIsItNow: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let bmw: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

const logNumber = i => {
  console.log(i);
};

const logNumber: (i: number) => void = i => {
  console.log(i);
};
