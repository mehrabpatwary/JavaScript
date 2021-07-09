try {
    //alert("Hi everyone");
    //alert(x);
} catch (error) {
    //console.log(error);
} finally {
    //alert("Bye everyone");
}

document.querySelector("#checkButton").addEventListener("click", function() {
    var text = document.querySelector("#textInput").value;
    try {
        if (text < 5) {
            throw "Input is less then 5"
        } else if (text > 10) {
            throw "Input is more then 10"
        }
    } catch (err) {
        alert(err);
    }
});