let arr = [0, 1, 0, 3, 12];
let index = 0;

// move non-zero elements forward
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[index] = arr[i];
        index++;
    }
}

// fill remaining positions with zero
for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
}

console.log(arr); // [1, 3, 12, 0, 0]
