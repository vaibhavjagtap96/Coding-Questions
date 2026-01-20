let arr = [10, 5, 10, 7, 5];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            count++;
        }
    }

    if (count === 0) {
        unique[unique.length] = arr[i];
    }
}

console.log(unique);
