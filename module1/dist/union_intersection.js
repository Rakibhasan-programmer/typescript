"use strict";
{
    const dev = "Backend developer";
    // string literal type -
    let status;
    status = "rejected";
    function addTwoNumber(n) {
        if (typeof n === "number") {
            console.log(n + n, "Hi");
        }
        else {
            console.log(2 * parseInt(n));
        }
    }
    addTwoNumber(2);
    addTwoNumber("3");
    //
}
