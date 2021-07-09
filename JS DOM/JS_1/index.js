function mymsg() {
    alert("Hello Everyone");
}

function mymsgP() {
    var myVar = document.querySelector('#paraId');
    myVar.innerHTML = 'You have clicked para 1';
}

var flower = document.querySelector("#flw");
function img1() {
    flower.src = '/image/1.jpg';
    flower.style.width = "500px";
    flower.style.height = "450px";
}
function img2() {
    flower.src = '/image/2.jpg';
    flower.style.width = "500px";
    flower.style.height = "450px";
}