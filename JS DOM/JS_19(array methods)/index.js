let numbers =  [15, 419, 56, 52, 147, 63];

let firstEvenNumber = numbers.find(x => x%2===0);
let firstEvenNumberIndex = numbers.findIndex(x => x%2===0);
console.log(firstEvenNumber);
console.log(firstEvenNumberIndex);


let objArry = [
    {
        id: 101,
        cgpa: 2.55
    },
    {
        id: 102,
        cgpa: 2.32
    },
    {
        id: 103,
        cgpa: 3.55
    },
    {
        id: 104,
        cgpa: 4.55
    }
]

let Hcgpa = objArry.find(x => x.cgpa>3);
let HIcgpa = objArry.findIndex(x => x.cgpa>3);
console.log(Hcgpa)
console.log(HIcgpa)

