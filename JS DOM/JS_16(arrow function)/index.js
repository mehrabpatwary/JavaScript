function display1(){ console.log("Hi, I'm display1"); }
const display2 = () => console.log("Hi, I'm display2");

display1();
display2();


function message1() { return "Hi, i'm message1"; }
const message2 = () => "Hi, i'm message2";

console.log(message1());
console.log(message2());


function add1(num1, num2){ return num1 + num2; }
const add2 = (num1, num2) => num1 + num2; 

console.log(add1(10, 20));
console.log(add2(20, 30));
