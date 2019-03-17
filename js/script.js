/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
/* 
  Array of quotes objects 
  quotes from https://www.goodreads.com/quotes and wikiquote.oprg
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

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(){
  let randomIndex = 0;
  
  randomIndex = getRandomNumberWithinRange(0, ( quotes.length - 1 ));

  return quotes[randomIndex];
}

function getRandomNumberWithinRange (lowerLimit, upperLimit) {
  upperLimit = Math.floor(upperLimit);
  lowerLimit - Math.ceil(lowerLimit); 
  return Math.floor(((upperLimit - lowerLimit) * Math.random( )) + lowerLimit + 1);
} 

/*
  from  https://stackoverflow.com/questions/18820733/getting-a-random-background-color-in-javascript
 */
function getRandomColour(){
  const randomhex = getRandomNumberWithinRange(0, 0xFFFFFF);

  return `#${("000000" + randomhex.toString(16)).substr(-6)}`;
}

function changeColor(){
  const randomColor = getRandomColour();
  document.querySelector('body').style.backgroundColor = randomColor;
  document.querySelector('#loadQuote').style.backgroundColor = randomColor;
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(){
  let quoteInfo = getRandomQuote();
  let quoteHtml = '';
 
  quoteHtml += `<p class="quote fade-in"> ${quoteInfo.quote}</p> <p class="source slide-in"> ${quoteInfo.source}`;

  if('citation' in quoteInfo) {
    quoteHtml += `<span class="citation"> ${quoteInfo.citation}</span>`;
  }

  if('year' in quoteInfo) {
    quoteHtml += `<span class="year"> ${quoteInfo.year} </span>`;
  }

  quoteHtml += `</p>`

  document.querySelector('#quote-box').innerHTML = quoteHtml;
  changeColor();
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.