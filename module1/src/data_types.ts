{
// string
let firstName: string = "Rakib";
// number
let id: number = 12;
// boolean
let isAdmin: boolean = true;
// undefined
let undef: undefined = undefined;
// null
let n: null = null;


// any type - not recomended
let d;


// array
let friends: string[] = ["Rakib", "Sakib"];
let eligibilityRollList: number[] = [1, 3, 3];


// tuple - 
const coordinates: [number, number] = [1, 5];

const ageName: [number, string, boolean] = [24, "Rakib", true];


// object -
const user: {
    firstName: string;
    lastName?: string; // ? optional types
    age: number;
    isStudent: boolean;
    company: "Brain Station 23"; // literal types - value as a type
    readonly isMarried: boolean;
} = {
    firstName: "Rakib",
    lastName: "Hasan",
    age: 24,
    isStudent: true,
    company: "Brain Station 23",
    isMarried: true
};

// user.company = "Brain Station 23";
// user.isMarried = false  // cannot modify bcz of readonly property

}