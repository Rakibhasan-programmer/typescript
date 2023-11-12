{
    //
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };
    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof Vehicle;


    const getPropertyValue = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key];
    }

    const user = {
        name: "Z",
        age: 24,
        address: "Dhaka"
    };
    const res = getPropertyValue(user, 'address');
    console.log(res);
    








    //
}