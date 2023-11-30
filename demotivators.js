
import quotes from "./demotivators.json" assert {type:'json'}

let new_quote = JSON.stringify(quotes);
let n_quote = JSON.parse(new_quote);

const quotesDiv = document.getElementById("quote");
const quotesButton = document.getElementById("quoteBtn");

quotesButton.addEventListener("click", loadQuote);


async function loadQuote(){
   let random_quote = n_quote[Math.floor(Math.random()*n_quote.length)];
   quotesDiv.innerHTML = random_quote.quote;
}
