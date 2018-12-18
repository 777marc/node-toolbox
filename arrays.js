// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


const objArr = [{ name: 'one', id: 1}, { name: 'two', id: 2}, { name: 'three', id: 3} ]
const intArr = [1,2];

let sub = objArr.filter(x => intArr.includes(x.id));

console.log(sub);