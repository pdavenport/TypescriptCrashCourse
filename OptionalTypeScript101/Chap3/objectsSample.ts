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

const { age, name1 } = profile;

const { age, name1 }: { age: number; name1: string } = profile;

const {
  coords: { lat, lng }
} = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

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
