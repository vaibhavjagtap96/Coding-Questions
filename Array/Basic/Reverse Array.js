let arr = [10, 5, 22, 7, 1];
let rev = [];

for (let i = arr.length - 1; i >= 0; i--) {
    rev[rev.length] = arr[i];
}

console.log(rev);
