console.log("Welcome");

pormise1 = new Promise((resolve, reject) =>{
    let result = true;
    if(result == true){
        setTimeout(() => resolve('Successfully run promise1'), 3000);
    }else{
        reject(new Error('An error happen'));
    }
});

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Successfully run promise2'), 1000);
});

pormise1.then((res) => console.log('Take 3 second ' + res)).catch((res) => console.log(res.message));

Promise.all([pormise1, promise2]).then(([res1, res2]) => console.log(res1 +" <-Total 4 second-> "+ res2));

Promise.race([pormise1, promise2]).then((res) => console.log("I'm race (1 second)-> " + res));


 
console.log("Bye");