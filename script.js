const form = document.querySelector("form");
const publishDate = document.querySelector("#publish-date");

function handleFormChange(e) {
  const elements = e.currentTarget.elements;
  const publishlater = elements.publish.value === "no";
  if (publishlater) {
    publishDate.classList.remove("hidden");
  } else {
    publishDate.classList.add("hidden");
  }
}

form.addEventListener("change", handleFormChange);

// BOUTTONS MOINS ET PLUS TROP BG

let moins = document.querySelector("#moins");
let plus = document.querySelector("#plus");
let total = document.querySelector("#total_number");

let number = 10000; // valeur initial

function AddFiveTickets(e) {
  //3.faire "number + 5" ou "number - 5"
  number = number + 10; //on précise que le chiffre affiché sur le moment a été additionné avec 10
  console.log(number); // vérification que la variable "number" fonctionne correctement
  UpdateTotal(number); // change le nombre affiché a l'écran
}

plus.addEventListener("click", AddFiveTickets);

function SubFiveTickets(e) {
  //3.faire "number + 5" ou "number - 5"
  number = number - 10;
  console.log(number);
  UpdateTotal(number);
}

moins.addEventListener("click", SubFiveTickets);

function UpdateTotal(newTotal) {
  total.value = newTotal; // lie les fonctions entre elles en comptant en compte le nombre affiché sur le moment
}
// 1. récuperer le boutton 2.faire un sorte que quand on clique dessus on active la fonction  4.écrire "number"
