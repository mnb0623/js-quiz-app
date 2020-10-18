import { quiz } from "./quiz.js";

const $question = document.getElementById("js-question");
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $buttons = document.getElementsByTagName("button");
const buttonLength = $buttons.length;

// 問題文、選択肢を定義
const setupQuiz = function () {
  $question.textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $buttons[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("OK");
    score++;
  } else {
    window.alert("NG");
  }
  quizIndex++;
  showEnd();
};

const showEnd = () => {
  if (quizIndex < quizLength) {
    // 問題数がまだあれば実行
    setupQuiz()
  } else {
    window.alert("end. your score is" + score + "/" + quizLength);
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $buttons[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
