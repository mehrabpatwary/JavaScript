var my_heading = document.querySelector("h1");
my_heading.addEventListener("mouseover", function() {
    my_heading.classList.add("my-style");
});
my_heading.addEventListener("mouseout", function() {
    my_heading.classList.remove("my-style");
});