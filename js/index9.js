/** Selection des différents éléments de la page puis sauvgarde de ceux-ci dans des variables  **/
// Attention dans la fonction queryselector on utilise une selection comme le CSS ne pas oublier de mettre le # pour selectionner en fonction d'un id
// Pour pouvoir se retrouver plus facilement dans le code il est préférable de sauvgarder les selections dans des variables pour réutiliser nos selections plus facilement
const btnTop = document.querySelector("#ctrl_btn_top");
const btnBottom = document.querySelector("#ctrl_btn_bottom");
const btnLeft = document.querySelector("#ctrl_btn_left");
const btnRight = document.querySelector("#ctrl_btn_right");
const personnage = document.querySelector("#personnage");

/** Mise en place des appels aux fonction lorsque un évènement est déclanché **/

// Lorsque on clique sur le bouton "haut"
btnTop.addEventListener("click", (e) => {
  e.preventDefault(); // On annule l'action par défaut du bouton
  haut(personnage); // on lance la fonction haut en passant le personnage en paramètre
});

/** Déclaration des fonctions **/

/**
 * Fonction qui permet de déplacer le personnage vers le haut
 * @param {HTMLElement} personnage
 */
function haut(personnage) {
  // On vérifi si le personnage a été bougé
  if (personnage.style.top) {
    // Si le personnage a déjà été bougé
    personnage.style.top = parseInt(personnage.style.top) - 10 + "px"; // On transform sa position en entier puis on soustrait le deplacement à la position et en ajoute l'unité
  } else {
    // Si le personnage n'a pas été bougé
    personnage.style.top = -10 + "px"; // On change la position
  }
}
