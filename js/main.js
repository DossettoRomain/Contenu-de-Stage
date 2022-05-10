/**
 * Consigne :
 *  1 - Créer l'autocomplétion quand on clique sur le bouton autocomplete /////
 *  2 - Vérifier que les mots de passe sont égaux à la soumission du formulaire
 *      -> si les mots de passes sont égaux on envoit le formulaire
 *      -> si les mots de passes sont différents on averti l'utilisateur avec une alert
 */
const button = document.querySelector("#autoComplete");
button.onclick = (e) => {
  e.preventDefault();
  document.querySelector("#name").value = "Dossetto";
  document.querySelector("#prenom").value = "Romain";
  document.querySelector("#birthdate").value = "2003/02/23";
  document.querySelector("#phonenumber").value = "0617522765";
  document.querySelector("#exampleInputEmail1").value =
    "romain.dossetto.13@outlook.com";
};
const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#passwordrepeat");
const button2 = document.querySelector(".btn.btn-success[type=submit]");

console.log(button2);
button2.onclick = (e) => {
  e.preventDefault();
  if (password.value === passwordRepeat.value) {
    document.querySelector("form").submit();
  } else {
    alert("Les mots de passe ne correspondent pas !");
  }
};
