const bouton = document.querySelector(".MonBouton");
bouton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("BRAVO");
});
bouton.addEventListener("mouseenter", (e) => {
  let timer = getRandomInt() * 2;
  setTimeout(() => {
    bouton.style.top = getRandomInt() + "%";
    bouton.style.left = getRandomInt() + "%";
  }, timer);
  console.log("Entrée");
  console.log(timer);
});
function getRandomInt() {
  return Math.round(Math.random() * 100);
}
console.log(bouton.style);
