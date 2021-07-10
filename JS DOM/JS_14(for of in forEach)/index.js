names = ['s1', 's2', 's3', 's4']; //array
for(let name of names){
    console.log(name);
}

let obj = {
    id : 101,
    name: 'Mehrab',
    age : 24,
    cgpa : 3.45
}
for(let x in obj){
    console.log(`${x}: ${obj[x]}`);
}

let numbers = [10, 20, 30, 40];
numbers.forEach((element, index, arr) => {
    arr[index] = element*2;
});
console.log(numbers);