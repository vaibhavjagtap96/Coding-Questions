let arr = [10, 5, 22, 7, 1, 30, 8, 9];

let evenCount = 0;
let oddCount = 0;

// loop through array
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Total Even Numbers =", evenCount);
console.log("Total Odd Numbers =", oddCount);
