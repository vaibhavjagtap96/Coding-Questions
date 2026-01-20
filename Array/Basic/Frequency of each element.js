let arr = [10, 5, 10, 7, 5];

for (let i = 0; i < arr.length; i++) {

    let count = 0;
    let isVisited = false;

    // check if element already counted
    for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
            isVisited = true;
            break;
        }
    }

    if (isVisited) continue;

    // count frequency
    for (let k = 0; k < arr.length; k++) {
        if (arr[i] === arr[k]) {
            count++;
        }
    }

    console.log(arr[i] + " = " + count);
}
