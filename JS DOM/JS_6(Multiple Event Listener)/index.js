len = document.querySelectorAll('.btn').length;
for (var i = 0; i < len; i++) {
    var my_var = document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + ' is Clicked';
    });
}