//selectors
// const btn = document.querySelector("#submit");
// const displayedQuestion = document.querySelector(".question");

let currentQuestionIndex = 0;
let correctQuestion = 0;
let wrongQuestion = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const statusElement = document.getElementById("status");
const quizForm = document.getElementById("quiz-form");
const rightElement = document.getElementById("right");
const wrongElement = document.getElementById("wrong");
const finalresultElement = document.getElementById("final-result");

const questions = [
    {
      question: "What is the capital of India?",
      options: ["Kolkata", "Mumbai", "New Delhi", "Chennai"],
      correctAnswer: 2
    },
    {
      question: "Which river is known as the 'Ganga' in India?",
      options: ["Brahmaputra", "Yamuna", "Indus", "Ganges"],
      correctAnswer: 3
    },
    {
      question: "Which is the national animal of India?",
      options: ["Lion", "Elephant", "Tiger", "Leopard"],
      correctAnswer: 2
    },
    {
      question: "Which famous monument in India is also known as the 'Symbol of Love'?",
      options: ["Qutub Minar", "Taj Mahal", "Hawa Mahal", "Red Fort"],
      correctAnswer: 1
    },
    {
        question: "Which was the first Indian film to win the grand prize at the Cannes Film Festival?",
        options: ["Pather Panchali", "Mother India", "Neecha Nagar", "Lagaan"],
        correctAnswer: 2
      }
  ];  

// btn.addEventListener("click", (e) => {
//     e.preventDefault();

//     const selectedOption = document.querySelector("#options").value;
    
//     console.log(selectedOption);
// });

// renderQuestion();

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = ""; // Clear previous options

    console.log(currentQuestion);
  
    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("option");
      optionElement.value = index;
      optionElement.textContent = option;
      optionsElement.appendChild(optionElement);
    });
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const selectedOptionIndex = parseInt(optionsElement.value);
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      statusElement.textContent = "Correct!";
      correctQuestion++;
    } else {
      statusElement.textContent = "Wrong!";
      wrongQuestion++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
        setTimeout(function () {
            alert("Quiz is completed and now you will see your result");
            rightElement.innerText = `Correct Answers are : ${correctQuestion}`;
            wrongElement.innerText = `Wrong Answers are : ${wrongQuestion}`;
            finalresultElement.innerText = correctQuestion >= 3 ? `Final Result : Pass` : "Final Result : Fail";
          }, 1000);
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    renderQuestion();
  });
  
  

