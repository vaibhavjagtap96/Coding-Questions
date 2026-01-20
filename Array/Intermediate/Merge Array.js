let a = [1, 2, 3];
let b = [4, 5];

let c = [];

for (let i = 0; i < a.length; i++)
    c[c.length] = a[i];

for (let i = 0; i < b.length; i++)
    c[c.length] = b[i];

console.log(c);
// [1, 2, 3, 4, 5]
 

//c[c.length] = value adds an element at the end of the array 
//without using push().
