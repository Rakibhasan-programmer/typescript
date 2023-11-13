{
    // oop - class
    class Animal {
        public name: string;
        public species: string;
        public sound: string;

        constructor(name: string, species: string, sound: string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const cat = new Animal("olivier", "cat", "meow meow");
    console.log(cat);
    cat.makeSound();











    //
}