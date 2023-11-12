{
  //

  // generics

  type GenericArray<T> = Array<T>;

  const rollNumber: number[] = [2, 3, 4, 6];
  const rollNumber1: Array<number> = [2, 3, 4, 6];

  const mentors: string[] = ["A", "B", "C"];
  const mentors1: Array<string> = ["A", "B", "C"];

  const isAdmin: boolean[] = [true, false, true];
  const isAdmin1: Array<boolean> = [true, false, true];

  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: "Rakib",
      age: 24,
    },
    {
      name: "Mr X",
      age: 23,
    },
  ];

  //
  type GenericTuple<x, y> = [x, y];
  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    12,
    { name: "Rakib", email: "rakib@gmail.com" },
  ];

  // interface + generics
  interface Developer<T, B = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: Number;
    };
    smartWatch: T;
    bike?: B;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<AppleWatch> = {
    name: "Rakib",
    computer: {
      brand: "DELL",
      model: "gdfyetrrr",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Apple",
      model: "KYCER",
      display: "Amoled",
    },
  };

  type RealmeWatch = {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };
  const richDeveloper: Developer<RealmeWatch, boolean> = {
    name: "Rakib",
    computer: {
      brand: "DELL",
      model: "gdfyetrrr",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Realme",
      model: "KYCER",
      display: "Amoled",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: false,
  };
  console.log(richDeveloper);
  console.log(poorDeveloper);

  // function + generics
  //

  const createArray = (param: string): string[] => [param];
  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => [param];
  const res2 = createArrayWithGeneric<boolean>(true);
  console.log(res2);

  type user = {
    id: number;
    name: string;
    email: string;
  };
  const resGenericObj = createArrayWithGeneric<user>({
    id: 1,
    name: "Rakib",
    email: "rakib@gmail.com",
  });
  console.log(resGenericObj);

  //
}
