const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};
const pepsi = ["brown", true, 40];

const sprite: [string, boolean, number] = ["clear", true, 35];

type Drink = [string, boolean, number];

const drPepper: Drink = ["brown", true, 45];
