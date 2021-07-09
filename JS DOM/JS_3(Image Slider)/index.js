var photos = ["/image/1.jpg", "/image/2.jpg", "/image/3.jpg"]
img = document.getElementById("img");
var conunt = 0;

function next() {
    conunt++;
    if (conunt >= photos.length) {
        conunt = 0;
        img.src = photos[conunt];
    }
    else {
        img.src = photos[conunt];
    }

}

function prev() {
    conunt--;
    if(conunt < 0){
        conunt = photos.length-1;
        img.src = photos[conunt];
    }
    else{
        img.src = photos[conunt];
    }
}