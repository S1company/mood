const quotes = {
  happy: [
    "Happiness is not out there, it’s in you.",
    "The purpose of our lives is to be happy.",
    "Happiness is the best makeup."
  ],
  sad: [
    "Tears are words the heart can’t express.",
    "This too shall pass.",
    "Every storm runs out of rain."
  ],
  motivated: [
    "Don’t stop until you’re proud.",
    "Success is not final, failure is not fatal.",
    "The only way to achieve the impossible is to believe it is possible."
  ],
  calm: [
    "Keep calm and carry on.",
    "Peace begins with a smile.",
    "The more tranquil a man becomes, the greater is his success."
  ]
};

const moodButtons = document.querySelectorAll(".mood-btn");
const quoteBox = document.getElementById("quote");

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    quoteBox.textContent = randomQuote;
    document.body.style.background = getBackgroundColor(mood);
  });
});

function getBackgroundColor(mood) {
  const colors = {
    happy: "#ffeb99",
    sad: "#a5d8ff",
    motivated: "#b2f2bb",
    calm: "#d0bfff"
  };
  return colors[mood];
}
