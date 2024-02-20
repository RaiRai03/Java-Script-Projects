// script.js

const quotes = [
  'When you have eliminated the Impossible, whatever remain, however impossible, must be completed',
  'There is nothing more deceptive than an obvious fact',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation',
  'I never make exceptions. An exception dispoves the rules',
  'What one man can invent, another can discover',
  'Nothing clears up a case so much as stating it to another person',
  'Education never ends, Watson. Life is a series of learning and learning until the day we die.',
  'JavaScript is a high-level, interpreted programming language that is primarily used to enhance web pages to provide for a more user-friendly experience.'
];

const motivationalQuotes = [
  'Believe you can and you\'re halfway there.',
  'The only way to do great work is to love what you do.',
  'Don\'t watch the clock; do what it does. Keep going.',
  'You miss 100% of the shots you don\'t take.',
  'The harder you work for something, the greater you\'ll feel when you achieve it.',
  'Success is not the key to happiness. Happiness is the key to success.',
  'If you want to achieve greatness, stop asking for permission.'
];

let words = [];
let wordIndex = 0;
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');

function showQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  words = quote.split(' ');
  wordIndex = 0;
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  quoteElement.innerHTML = spanWords.join('');
  quoteElement.childNodes[0].className = 'highlight';
  messageElement.innerText = '';
}

function checkInput(input) {
  if (input.toLowerCase() === words[wordIndex].toLowerCase()) {
    wordIndex++;
    if (wordIndex === words.length) {
      messageElement.innerText = 'Congratulations! You\'ve completed the quote.';
      showQuote();
    } else {
      quoteElement.childNodes[wordIndex - 1].className = '';
      quoteElement.childNodes[wordIndex].className = 'highlight';
    }
  } else {
    messageElement.innerText = 'Oops! That\'s not correct. Try again.';
  }
}

const typedValueElement = document.getElementById('typed-value');
typedValueElement.addEventListener('input', function() {
  checkInput(this.value);
  this.value = '';
});

const quoteButton = document.getElementById('quote-button');
quoteButton.addEventListener('click', showQuote);

const hideQuoteButton = document.getElementById('hide-quote-button');
hideQuoteButton.addEventListener('click', showQuote);

const color

const colorButton = document.getElementById('color-button');
colorButton.addEventListener('click', function() {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

showQuote();