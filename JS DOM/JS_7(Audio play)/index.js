for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".my-button")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        audioPlay(text);
        anim(text);
    });
}

document.addEventListener("keypress", function(event) {
    var text = event.key;
    audioPlay(text);
    anim(text);
});

function anim(text) {
    var select = document.querySelector("." + text);
    select.classList.add("anim");
    setTimeout(function() {
        select.classList.remove("anim");
    }, 1000);
}

function audioPlay(text) {
    switch (text) {
        case 'A':
            var audio = new Audio("/sounds/a.mp3");
            audio.play();
            break;
        case 'B':
            var audio = new Audio("/sounds/b.mp3");
            audio.play();
            break;
        case 'C':
            var audio = new Audio("/sounds/c.mp3");
            audio.play();
            break;
    }
}