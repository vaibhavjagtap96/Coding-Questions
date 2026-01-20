let arr = [1, 2, 4, 5];
let n = 5;

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

let total = (n * (n + 1)) / 2;

let missing = total - sum;
console.log(missing); // 3
