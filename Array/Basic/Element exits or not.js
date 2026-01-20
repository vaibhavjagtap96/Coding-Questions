let arr = [10, 5, 22, 7, 1];
let search = 22;

let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Element exists");
} else {
    console.log("Element does not exist");
}
