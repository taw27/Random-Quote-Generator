/*
 Starts the interbal for cycling the quote and stores global variable for inerval id
 to make it easy to restart the quote interval from anywhere 
*/
let quoteChangeInterval = setInterval(printQuote, 20000);

/* 
  Array of quotes objects
  quotes from https://www.goodreads.com/quotes and wikiquote.org
*/ 

const quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.”",
    source: "Dr. Seuss",
    tags: ["happiness", "joy", "life", "optimism", "sadness", "smile", "smiling"]
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    tags: [ "humor", "life"]
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: "November 18, 2005",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
    tag: [ "lies", "lying", "memory", "truth"]
  },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    source: "Oscar Wilde",
    citation: "The Happy Prince and Other Stories",
    tags: [ "intelligence", "self-deprecation"]
  }
];

console.log(quotes);

/*
  returns a random quote object from the quotes array
*/
function getRandomQuote(){
  let randomIndex = 0;
  
  randomIndex = getRandomNumberWithinRange(0, ( quotes.length - 1 ));

  return quotes[randomIndex];
}

/*
  takes in the upper limit and lower limit and returns a random integer within the range
*/
function getRandomNumberWithinRange (lowerLimit, upperLimit) {
  upperLimit = Math.floor(upperLimit);
  lowerLimit - Math.ceil(lowerLimit); 
  return Math.floor(((upperLimit - lowerLimit) * Math.random( )) + lowerLimit + 1);
} 

/*
  returns a random color hex as a string
  from  https://stackoverflow.com/questions/18820733/getting-a-random-background-color-in-javascript
 */
function getRandomColour(){
  const randomhex = getRandomNumberWithinRange(0, 0xFFFFFF);

  return `#${("000000" + randomhex.toString(16)).substr(-6)}`;
}

/*
  sets the backgrounf color of the webpage to a random color
 */
function changeColor(){
  const randomColor = getRandomColour();
  document.querySelector('body').style.backgroundColor = randomColor;
  document.querySelector('#loadQuote').style.backgroundColor = randomColor;
}

/*
  displays a random quote and the source, along with  citation, year, 
  and tag if they exist. Also changes the background color, adds 
  associated classe  for transitions/animations and resets the 
  qoute cycling interval
*/
function printQuote(){
  clearInterval(quoteChangeInterval);

  let quoteInfo = getRandomQuote();
  let quoteHtml = '';
 
  quoteHtml += `<p class="quote fade-in"> ${quoteInfo.quote}</p> <p class="source slide-in"> ${quoteInfo.source}`;

  if('citation' in quoteInfo) {
    quoteHtml += `<span class="citation"> ${quoteInfo.citation}</span>`;
  }

  if('year' in quoteInfo) {
    quoteHtml += `<span class="year"> ${quoteInfo.year} </span>`;
  }

  if('tags' in quoteInfo) {
    quoteHtml += `<span class="tag"> tags: ${quoteInfo.tags.join(', ')} </span>`;
  }

  quoteHtml += `</p>`

  document.querySelector('#quote-box').innerHTML = quoteHtml;
  changeColor();

  quoteChangeInterval = setInterval(printQuote, 20000);
}



/*
  adds listener to the loadQuote button which trigger the printQuote function on click
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

