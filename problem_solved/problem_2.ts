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

console.log(person1);