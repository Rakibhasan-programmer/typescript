{
    // inheritence

    class Person{
        name: string;
        age: number;
        address: string;

        constructor (name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        };

        getSleep(hours: number){
            console.log(`${this.name} sleeps ${hours} hours a day.`);
        }
    }


    // student class extends Parent

    class Student extends Person{
        constructor (name: string, age: number, address: string){
            super(name, age, address);
        };
    };


    // teacher class extends Parent

    class Teacher extends Person{
        designation: string;

        constructor (name: string, age: number, address: string, desig: string){
            super(name, age, address);
            this.designation = desig;
        };

        takeClass(totalClass: number){
            console.log(`${this.name} takes ${totalClass} class in a day.`)
        }
    };

    const std1 = new Student("Mr Rakib", 24, "Dhaka");
    std1.getSleep(8);

    const teacher = new Teacher("Mr X", 34, "Dinajpur", "Professoor");
    teacher.takeClass(6);











    //
}