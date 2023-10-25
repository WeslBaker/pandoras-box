// Constants

//Dad Jokes
const jokeDiv = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");
const factsDiv = document.getElementById("facts");
const factsButton = document.getElementById("factsBtn");

// Event Listeners

jokeButton.addEventListener("click", loadJoke );
factsButton.addEventListener("click", loadFact)

// Function Calls

loadJoke();
loadFact();

// Sample Data

sampledata = {
    "joke":"What did the mama bullet say to the daddy bullet? We're having a BB.",
    "likes" : 45
};

// Functions

async function loadJoke() {

    const config = {
        headers : {
            Accept: "application/json"
        }
    };

    const result = await fetch("https://icanhazdadjoke.com", config);
    const data = await result.json();

    jokeDiv.innerHTML = data.joke;

}

async function loadFact(){

    const config = {
        headers : {
            Accept:"application/json"
        }
    }

    const result = await fetch("https://api.api-ninjas.com/v1/facts?limit=" + 1, config);
    const data = await result.json();
    factsDiv.innerHTML = data.fact
}


// const QuoteDiv = document.getElementById("quote");
// const QuoteButton = document.getElementById("quoteBtn");

// QuoteButton.addEventListener("click", getapi );

// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);

// loadquote();

// async function loadquote() {

//     const config = {
//         headers : {
//             Accept: "application/json"
//         }
//     };

//     const resultquote = await fetch("https://zenquotes.io/api/quotes/", config);
//     const dataquote = await resultquote.json();

//     QuoteDiv.innerHTML = dataquote.quote;

// }

