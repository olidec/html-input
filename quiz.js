//JSON Array
const questions = [
'{"question": "The Plaka is the oldest quarter of which city?", "answers": {"a": "Athens", "b": "Prague", "c": "Rome", "d": "Vienna"}, "correctAnswer": "a"}',
'{"question": "What is an axolotl?", "answers": {"a": "A nerve in the brain", "b": "A multi-axled vehicle", "c": "A type of mortice lock", "d": "A species of salamander"}, "correctAnswer": "d"}',
'{"question": "The Panama Canal was officially opened by which US president?", "answers": {"a": "Calvin Coolidge", "b": "Herbert Hoover", "c": "Theodore Roosevelt", "d": "Woodrow Wilson"}, "correctAnswer": "d"}'
];

let data = [];
for (let i = 0; i < questions.length; i++) {
    data.push(JSON.parse(questions[i]));
}

let questionNumber = Math.floor(Math.random()*questions.length);
// var questionNumber = 0;

document.getElementById("question").innerHTML = data[questionNumber].question;
document.getElementById("radio").innerHTML = 
`
<input type="radio" name="question" value="a" class="rad_butn">
a : ${data[questionNumber].answers["a"]}; <br>
<input type="radio" name="question" value="b" class="rad_butn">
b : ${data[questionNumber].answers["b"]}; <br>
<input type="radio" name="question" value="c" class="rad_butn">
c : ${data[questionNumber].answers["c"]}; <br>
<input type="radio" name="question" value="d" class="rad_butn">
d : ${data[questionNumber].answers["d"]}; <br>
`;

function checkAnswer() {
    var selector = document.querySelector('input[name="question"]:checked').value;
    if (selector == data[questionNumber].correctAnswer) {
        document.getElementById("result").innerHTML = "Correct!"
    }
    else {
        document.getElementById("result").innerHTML = "Incorrect!"
    }
}

function nextQuestion() {
    location.reload();
}