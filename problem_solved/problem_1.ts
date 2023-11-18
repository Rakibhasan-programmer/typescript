

const square = (num: (string | number)) => {
    if(typeof num == "string") return num.length;
    else return num*num;
}
console.log(square("444"));
console.log(square(444));


