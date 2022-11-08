function replaceWords() {
    const word1 = document.getElementById("input1").value;
    const word2 = document.getElementById("input2").value;
    const word3 = document.getElementById("input3").value;
    const word4 = document.getElementById("input4").value;
    const word5 = document.getElementById("input5").value;
    const word6 = document.getElementById("input6").value;

    document.getElementById("output1").innerHTML = word1;
    document.getElementById("output2").innerHTML = word2;
    document.getElementById("output3").innerHTML = word3;
    document.getElementById("output4").innerHTML = word2;
    document.getElementById("output5").innerHTML = word4;
    document.getElementById("output6").innerHTML = word5;
    document.getElementById("output7").innerHTML = word6;

    document.getElementById('madlib1').style.visibility = "visible";
}