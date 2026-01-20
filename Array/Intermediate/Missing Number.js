let arr = [1, 2, 4, 5];
let N = 5;

for (let i = 1; i <= N; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === i) {
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Missing number is:", i);
        break;
    }
}
