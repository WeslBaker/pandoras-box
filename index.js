//Dad Jokes
// const jokeDiv = document.getElementById("joke");
// const jokeButton = document.getElementById("jokeBtn");

// jokeButton.addEventListener("click", loadJoke );

// loadJoke();

// sampledata = {
//     "joke":"What did the mama bullet say to the daddy bullet? We're having a BB.",
//     "likes" : 45
// };
    
// async function loadJoke() {

//     const config = {
//         headers : {
//             Accept: "application/json"
//         }
//     };

//     const result = await fetch("https://icanhazdadjoke.com", config);
//     const data = await result.json();

//     jokeDiv.innerHTML = data.joke;

// }



const QuoteDiv = document.getElementById("quote");
const QuoteButton = document.getElementById("quoteBtn");

QuoteButton.addEventListener("click", loadquote );

// const api_url ="https://api-ninjas.com/api/quotes";


loadquote();

async function loadquote() {

    const config = {
        headers : {
            Accept: "application/json"
        }
    };

    const resultquote = await fetch("https://www.chunchunye.com/random-quote/", config);
    const dataquote = await resultquote.json();

    QuoteDiv.innerHTML = dataquote.quote;

}


{/* <div class="miniwebtoolwidget" data-calculator="random-quote-generator" data-width="380"><div class="miniwebtoolh">Random Quote Generator</div><p><a href="https://miniwebtool.com/random-quote-generator/" target="_blank">Random Quote Generator ©miniwebtool.com</a></p></div><script async src="https://miniwebtool.com/embed.js?v=1"></script> */}
