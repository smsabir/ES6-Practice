// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// ES6 arrow function
// num is the parameter, => as return.
const doubleIt = num => num *2; 
console.log(doubleIt(55));

// for more than one parameter we should use bracket and separate those with comma. 
const add = (x, y) => x + y; 
console.log(add(55, 10));

// when we use a function to return a fixed value.
const give5 = () => 5; 
console.log(give5());

// for multiple operation within a function we have to add return, otherwise it won't work.
const doMath = (x, y) => {  
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath(7, 5);
console.log(result);