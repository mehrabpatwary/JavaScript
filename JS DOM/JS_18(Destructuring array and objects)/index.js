let number = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = number;
console.log(num1);
console.log(num3);

//swap

let a = 100, b = 200;
console.log(`Swap a = ${a} <-> b = ${b}`);
[a, b] = [b, a]
console.log(`Done a = ${a}  b = ${b}`);

// Object Destructuring

const obj1 = {
    fullName: 'mehrab patwary',
    age: 24,
    language: {
        native: 'Bangla',
        biginner: 'English'
    }
}
const { fullName, age, language } = obj1;
console.log(fullName);
console.log(age);
const { native, biginner } = obj1.language;
console.log(native);
console.log(biginner);

console.log("----------Function Output----------");

const student = ({ fullName, age, language }) => {
    const { native, biginner } = language;
    console.log(fullName);
    console.log(age);
    console.log(native);
    console.log(biginner);
}

student(obj1);