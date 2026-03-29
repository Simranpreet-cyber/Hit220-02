const tips = [
  "Break your study into 25 minute sessions and take short breaks between them.",
  "Write down the three most important tasks before starting your study session.",
  "Review your lecture notes on the same day to improve retention.",
  "Study in short focused blocks instead of waiting for last minute pressure.",
  "Use one simple weekly planner so you can see deadlines clearly."
];

const tipButton = document.getElementById("tipButton");
const tipOutput = document.getElementById("tipOutput");

if (tipButton && tipOutput) {
  tipButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipOutput.textContent = tips[randomIndex];
  });
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (button) {
  button.addEventListener("click", function () {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});
