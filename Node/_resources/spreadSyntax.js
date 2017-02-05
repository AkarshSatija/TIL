var arr=[1,2,3];


console.log(arr);
// [ 1, 2, 3 ]
console.log(...arr);
// 1 2 3

console.log(4,...arr);
// 4 1 2 3

console.log(...arr,...arr);
// 1 2 3 1 2 3
