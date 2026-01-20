let arr = [1, 2, 7, 4, 5];
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) { //1 > 2 = yes/true
        isSorted = false;
        break;
    }
}

console.log(isSorted); // true or false
