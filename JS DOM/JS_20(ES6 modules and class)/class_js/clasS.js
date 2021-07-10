class Student{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set studentName(name){
        this.name = name;
    }
    get studentInfo(){
        return `your name ${this.name} and id is ${this.id}`
    }
}

obj1 = new Student(101, "Mehrab");

console.log(obj1.id);
console.log(obj1.name);

obj1.studentName = "Munna";
console.log(obj1.name);

console.log(obj1.studentInfo);