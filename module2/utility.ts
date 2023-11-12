{
    //
    // pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    };

    type NameAndAge = Pick<Person, 'name' | "age">;

    // omit
    type ContactInfo = Omit<Person, 'name' | 'age'>;

    // required
    type PersonRequired = Required<Person>;

    // partial
    type PersonPartial = Partial<Person>;

    // readonly
    type PersonReadOnly = Readonly<Person>;
    const person1: PersonReadOnly = {
        name: "R",
        age: 20,
        email: "hsd",
        contactNo: "dydg"
    }

    // person1.name = "dsf";

    // Record type
    type MyObj = Record<string, string | number>;

    const obj: MyObj = {
        a: "ashjsdss",
        b: "sdjs",
        c: "sfddjhdsh",
        d: 30
    };
    







    //
}