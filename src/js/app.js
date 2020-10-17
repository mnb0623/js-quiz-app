const quiz = [
  {
    question: "your first name is ?",
    answers: ["mnb", "dsfamnb", "mfsanb", "mnbdsa"],
    correct: "mnb",
  },
  {
    question: "your last name is ?",
    answers: ["mnb", "fukui", "mfsanb", "mnbdsa"],
    correct: "fukui",
  },
  {
    question: "your borother is ?",
    answers: ["mnb", "dsfamnb", "hjm", "mnbdsa"],
    correct: "hjm",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// 問題文、選択肢を定義
const setupQuiz = function () {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("OK");
  } else {
    window.alert("NG");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    // 問題数がまだあれば実行
    setupQuiz()
  } else {
    window.alert("end");
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
