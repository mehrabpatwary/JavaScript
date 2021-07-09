var count = 0;
document.addEventListener("keypress", function(event) {
    count++;
    text = event.key;
    document.querySelector("p").innerHTML = 'You have pressed ' + count + ' times';
});