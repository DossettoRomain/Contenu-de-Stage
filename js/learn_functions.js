// 1 - Récupérer les valeur des input fait
//  1.1 - parcourir mes variables fieldNumberA ... D et sauvegarder dans une variable la valeur du champ fait
// 2 - Additionner le nombre A avec le nombre B fait
//  2.1 - Faire une addition avec les variables récupéré à l'étape 1.1 et la sauvegarder dans une variable
// 3 - Additionnner le nombre c avec le nombre d
//  3.1 - Faire une addition avec les variables récupéré à l'étape 1.1 et la sauvegarder dans une variable
// 4 - retourner les résultats
//  4.1 - Créer un div fait
//  4.2 - Dans la div créer à l'étape 4.1 afficher le résultat trouver à l'étape 2.1
//  4.3 - Inserer dans le body la div créer à l'éatape 4.1 et configurer à l'étape 4.2
//  4.4 - répéter les étapes 4.1 à 4.3 pour les nombre C et D
// !!!!! faire l'évenement qui désactive le bouton submit du formulaire et qui enclenche le calcul !!!!//

const boutonPourCalculer = document.querySelector("#btn_calculer");

boutonPourCalculer.addEventListener("click", (e) => {
  e.preventDefault();
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i = i + 2) {
    addition(inputs[i], inputs[i + 1], "body");
    soustraction(inputs[i], inputs[i + 1], "body");
    division(inputs[i], inputs[i + 1], "body");
  }
});
/**
 *
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @param {string} c
 */
function addition(a, b, c) {
  var nombreA = parseInt(a.value);
  var nombreB = parseInt(b.value);
  var resultat = nombreA + nombreB;
  var creationDiv = document.createElement("div");
  creationDiv.innerText = resultat;
  document.querySelector(c).appendChild(creationDiv);
}
/**
 *
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @param {string} c
 */
function soustraction(a, b, c) {
  var nombreA = parseInt(a.value);
  var nombreB = parseInt(b.value);
  var resultat = nombreA - nombreB;
  var creationDiv = document.createElement("div");
  creationDiv.innerText = resultat;
  document.querySelector(c).appendChild(creationDiv);
}
/**
 *
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @param {string} c
 */
function division(a, b, c) {
  var nombreA = parseInt(a.value);
  var nombreB = parseInt(b.value);
  var resultat = nombreA / nombreB;
  var creationDiv = document.createElement("div");
  creationDiv.innerText = resultat;
  document.querySelector(c).appendChild(creationDiv);
}
