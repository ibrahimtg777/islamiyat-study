const quizData = [
  {
    question: "How many Articles of Faith are there in Islam?",
    options: ["Five", "Six", "Seven", "Ten"],
    answer: "Six"
  },
  {
    question: "Which pillar of Islam involves fasting?",
    options: ["Zakat", "Salah", "Sawm", "Hajj"],
    answer: "Sawm"
  },
  {
    question: "What is the significance of Tawhid?",
    options: [
      "Belief in angels",
      "Belief in one God",
      "Belief in prophets",
      "Belief in the Day of Judgment"
    ],
    answer: "Belief in one God"
  }
];

function loadQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";
  quizData.forEach((q, index) => {
    const questionElem = document.createElement("div");
    questionElem.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
    q.options.forEach(option => {
      questionElem.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${option}"> ${option}
        </label><br>`;
    });
    container.appendChild(questionElem);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").textContent = `You scored ${score} out of ${quizData.length}! 🎉`;
}

const flashcards = [
  { term: "Tawhid", definition: "Belief in the oneness of Allah." },
  { term: "Akhirah", definition: "Belief in life after death and the Day of Judgment." },
  { term: "Sawm", definition: "Fasting during the month of Ramadan." },
  { term: "Shahadah", definition: "Declaration of faith: 'There is no god but Allah, and Muhammad is His messenger.'" },
  { term: "Zakat", definition: "Giving a portion of wealth to the needy; a pillar of Islam." }
];

let currentCard = 0;

function showCard(index) {
  const container = document.getElementById("flashcardContainer");
  const card = flashcards[index];
  container.innerHTML = `
    <div class="card">
      <h3>${card.term}</h3>
      <p>${card.definition}</p>
    </div>
  `;
}

function nextCard() {
  currentCard = (currentCard + 1) % flashcards.length;
  showCard(currentCard);
}

loadQuiz();
showCard(currentCard);
