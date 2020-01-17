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

const logNumber1: (i: number) => void = i => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);

const coordinates2: { x: number; y: number } = JSON.parse(json);

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

interface Foo {
  bar: number;
  bas: string;
}

var two = {} as Foo;
two.bar = 123;
two.bas = "hello";
