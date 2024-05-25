var password = "southside2255"

function submit() {
    var textBox = document.getElementById("input-box");
    if (textBox.value == password) {
        window.location.href="./configs/config.html"
    }
}