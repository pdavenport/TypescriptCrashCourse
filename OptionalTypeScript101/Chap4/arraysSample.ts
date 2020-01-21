const carMakers = ["ford", "toyota", "chevy"]; // You should see carMakers: string[]

const dates = [new Date(), new Date()]; // You should see 'Date[]' as the type of the date const

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]]; // An array of string arrays can be shown as 'string[][]'

const car0 = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (number | Date | string)[] = [
  new Date(),
  "2030-10-10",
  2019
];

const importantDates2 = [new Date(), "2030-10-10", 1989];
