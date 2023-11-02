
import facts from "./facts.json" assert {type:'json'}

let new_facts = JSON.stringify(facts);
let n_facts = JSON.parse(new_facts);

const factsDiv = document.getElementById("fact");
const factsButton = document.getElementById("factBtn");

factsButton.addEventListener("click", loadFact);


async function loadFact(){
   let random_fact = n_facts[Math.floor(Math.random()*n_facts.length)];
   factsDiv.innerHTML = random_fact.fact;
}
