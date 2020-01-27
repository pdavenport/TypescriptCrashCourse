### This is a sample JavaScript object with an annotated function property

```tsx
const profile = {
  name1: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};
```

### To destructure out different values and give them types,

it's the same process as annotating a variable.
So this:

```tsx
const { age, name1 } = profile;
```

Becomes:

```tsx
const { age, name1 }: { age: number; name1: string } = profile;
```

### To destructure out something a little more complex,

you still destructure and then define what you're destructuring.
This:

```tsx
const {
  coords: { lat, lng }
} = profile;
```

Becomes:

```tsx
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
```

Notice how the type definition values mirror the destructured values.

### Had the initial object been an Object Literal,

we would have given it type like this:

```tsx
let profile2: {
  name1: string;
  age: number;
  coords: { lat: number; lng: number };
  setAge: (age: number) => void;
} = {
  name1: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};
```
