"use strict";
{
    // normal function / function declaration
    function sum(num1, num2) {
        return num1 + num2;
    }
    sum(1, 4);
    // with explicit return type
    function sum1(num1, num2) {
        return num1 + num2;
    }
    sum1(1, 4);
    // with default value
    function sum2(num1 = 1, num2 = 1) {
        return num1 + num2;
    }
    sum2();
    const add = (a, b) => {
        return a + b;
    };
    // methods
    const client = {
        name: "Rakib",
        balance: 344,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
}
