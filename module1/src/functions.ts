
{
    
// normal function / function declaration

function sum(num1: number, num2: number){
    return num1+num2;
}
sum(1, 5);

printCourseName("TypeScript");
function printCourseName(name: string){
    console.log("Course name is: " + name.toUpperCase());
}



// with explicit return type
function sum1(num1: number, num2: number): number{
    return num1+num2;
}
sum1(1, 4);

// with default value
function sum2(num1: number = 1, num2: number = 1): number{
    return num1+num2;
}
sum2();


const add = (a: number, b: number): number => {
    return a+b;
}


// methods
const client = {
    name: "Rakib",
    balance: 344,
    addBalance(balance: number): number{
        return this.balance+balance;
    }
}

}