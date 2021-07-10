var numbers = [1, 2, 3, 4, 5, 6]

let newSquareNumber = numbers.map(function(x){
    return x*x;
});

console.log(newSquareNumber);

numbers = [10, 55, 66, 5, 6, 4, 12, 9, 99, 21];

let newNumber = numbers.filter(function(x){
    return x>10;
});

console.log(newNumber);