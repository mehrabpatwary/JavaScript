function add(x, y = 100, ...z) {
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    console.log(`z = ${z}`);
}
add(1, 2, 3, 4, 5, 6, 7, 8);

num1 = [1, 2, 3, 4];
num2 = [9, 10, 11, 12];
num = [...num1, 5, 6, 7, 8, ...num2];
console.log(`num = ${num}`);

let obj1 = {
    "Name": "Mehrab Patwary",
    "Age": 24
}
let obj2 = {
    "City": "Dhaka",
    "Occupation": "Student"
}
let obj = { ...obj1, ...obj2 }
console.log(obj); 