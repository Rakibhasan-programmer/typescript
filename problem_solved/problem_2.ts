interface Person{
    address?: {
        city: string;
        street: string;
    };
    phone?: string
};

const person1: Person = {
    address: {
        city: "Dhaka",
        street: "Road 2"
    }
};

const person2: Person = {
    address: {
        city: "Bogura",
        street: "Banani"
    }
};

const person3: Person = {
    address: {
        city: "Bogura",
        street: "Banani"
    }
};

console.log(person1);
console.log(person2);
console.log(person3);