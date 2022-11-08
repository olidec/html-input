function inputText() {
    const text = document.getElementById("text-in").value;
    document.getElementById("input-to-text").innerHTML = `'${text}'`;
}

function changeColor() {
    const x = document.getElementById("colorin").value;
    document.getElementById("change-bg").style.backgroundColor = x;
}

function changeFont(fontvalue) {
    document.getElementById("change-font").style.fontFamily = fontvalue;
}

function writeList() {
    var checkboxes = document.getElementsByName("chbx");
    document.getElementById("checked-list").innerHTML = "";
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            document.getElementById("checked-list").innerHTML += "<li>" + checkbox.value + "</li>"
        }
    }
}