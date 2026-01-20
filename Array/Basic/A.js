let num = [1,2,3,4,5,6,7,8];
let result = "This is even number -> ";

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        result = result + num[i];

        if (i < num.length - 2) {
            result = result + ",";
        }
    }
}

console.log(result);
