/* -- -- -- Début -- -- -- */

let compteur = 5; // Définition du compteur

const body = document.querySelector("body"); // Selection du body

const chronoDisplay = document.createElement("div"); // Création de la div qui affiche le chrono
chronoDisplay.style.padding = "0.5rem"; //Ajout d'un padding sur la div
chronoDisplay.innerHTML = `La recherche commence dans ${compteur} seconde${
  compteur > 1 ? "s" : ""
}`; // Ecriture du text dans la div

const cross = document.createElement("img"); // Création de l'image de la croix
cross.src = "https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"; // paramétrage du src de la croix
cross.style.position = "absolute"; // Paramétrage du de l'attribut css position de la croix
cross.style.top = getRandomInt() + "%"; // Paramétrage du de l'attribut css top de la croix
cross.style.left = getRandomInt() + "%"; // Paramétrage du de l'attribut css left de la croix
cross.addEventListener("click", () => {
  window.location.href = "./index8.html";
});

body.appendChild(chronoDisplay); // On affiche la div du chrono dans la page

// On crée un intervelle c'est un fonction qui permet de lancer une action tout les x milliseconde
// Le premier argument de la fonction est la fonction à executer et le deuxième est le temp en milliseconde isi 1000ms
const chrono = setInterval(() => {
  chronoDisplay.innerHTML = `La recherche commence dans ${compteur} seconde${
    compteur > 1 ? "s" : ""
  }`; // On met à jour la div avec la valeur du compteur

  // Si le compteur est égale a 0
  if (compteur === 0) {
    chronoDisplay.parentNode.removeChild(chronoDisplay); // On efface la div qui affiche le chrono
    body.appendChild(cross); // on affiche la croix
  }

  compteur -= 1; // On décrement le compteur de 1
  if (compteur <= -1) {
    clearInterval(chrono); // Des que le chrono est inferieur ou égale à -1 on supprimme l'intervalle
  }
}, 1000);

function getRandomInt() {
  return Math.round(Math.random() * 100);
}
