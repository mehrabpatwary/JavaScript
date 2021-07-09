
var h3 = document.createElement('h1');
var text = document.createTextNode("Heading Three");
h3.appendChild(text);

var mydiv = document.getElementById('my-div');
mydiv.appendChild(h3);

var h2 = document.getElementsByTagName("h1")[1];
mydiv.removeChild(h2);

var h1 = document.getElementsByTagName('h1')[0];

var h0 = document.createElement('h1');
var text = document.createTextNode("Heading Zero");
h0.appendChild(text);
mydiv.insertBefore(h0, h1);
