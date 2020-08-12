// function doubleIt(num) {
//     return num * 2;
// }

// const result = doubleIt(20);
// console.log(result);

//step 2
// const doubleIt = function myFun(num) {
//     return num * 2;
// }
// const result = doubleIt(20)
// console.log(result);


//ES6

// const doubleIt = num => num * 2;
// const result = doubleIt(40);
// console.log(result);

//  const doubleIt = num => num * 2;
//  console.log(doubleIt(20))

// const add = (x, y)=> x * y;
// const result = add(50, 70)

// console.log(result);

//ES6 Function Dara

const doMath = (x, y)=>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath(7, 5);
console.log(result);