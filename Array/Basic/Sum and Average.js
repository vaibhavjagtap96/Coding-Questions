let arr = [10, 5, 22, 7, 1];

let sum = 0;

// loop through array to calculate sum
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum / arr.length;

console.log("Sum =", sum);
console.log("Average =", average);
  