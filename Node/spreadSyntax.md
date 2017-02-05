# Spread Syntax
----


The *spread syntax* allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.


```
var arr=[1,2,3];


console.log(arr);
// [ 1, 2, 3 ]
console.log(...arr);
// 1 2 3

console.log(4,...arr);
// 4 1 2 3

console.log(...arr,...arr);
// 1 2 3 1 2 3
```

Example:

[spreadSyntax.js](_resources/spreadSyntax.js)

Ref:
-----
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
