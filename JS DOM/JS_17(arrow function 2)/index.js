let studentList = [
    {
        id : 101,
        name : "Mehrab",
        cgpa: 3.54
    },
    {
        id : 102,
        name : "Udoy",
        cgpa: 2.56
    },
    {
        id : 101,
        name : "Maruf",
        cgpa: 4.65
    },
    {
        id : 101,
        name : "Shuvo",
        cgpa: 2.65
    }
];
console.log(studentList);


function studentName1(){
    return studentList.filter(function(x){
        return x.cgpa > 3;
    }).map(function(y){
        return y.name;
    });
}
const studentName2 = () => studentList.filter(x => x.cgpa < 3).map(y => y.name);


console.log("Student 1: " + studentName1());
console.log("Student 2: " + studentName2());
