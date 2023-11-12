{
    //
    
    
    // interface - object type declaration

    interface User {
        name: string;
        age: number;
    }
    const user: User = {
        name: "Rakib",
        age: 25
    };


    // for array
    type Roll1 = number[];
    interface Roll2 {
        [index: number] : number;
    }
    const rollNumber: Roll2 = [1, 2, 3];
    
    
    
    
    
    //
}