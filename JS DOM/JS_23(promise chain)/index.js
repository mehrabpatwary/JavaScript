console.log("Welcome")

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 1 is successfullly run");
    });
}
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 2 is successfullly run");
        }, 3000)
    });
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 3 is successfullly run");
    });
}
const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task 4 is successfullly run");
    });
}

// taskOne().then(res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .catch(err => console.log(err));

const callPro = async() => {
    try{
        let t1 = await taskOne()
    console.log(t1);
    let t2 = await taskTwo()
    console.log(t2);
    let t3 = await taskThree()
    console.log(t3);
    let t4 = await taskFour()
    console.log(t4);
    }catch(err){
        console.log(err);
    }
}
callPro();
console.log("Bye")
















