let arr = [1, 3, 4, 2, 2];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            console.log("Duplicate element is:", arr[i]);
            break;
        }
    }
}
