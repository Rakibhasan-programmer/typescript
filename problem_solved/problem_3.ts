class Cat{
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

function isCat(cat: Cat){
    if(cat instanceof Cat) return "Yes, it is a cat.";
    
    return "no, it's not a cat.";
}

const myCat = new Cat("Olivier", 12);
console.log(isCat(myCat));
