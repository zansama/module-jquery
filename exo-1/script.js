console.log('exercice 1');
// La différence fondamentale entre Javascripts et jquery c'est que jquery est du Javascript condensé dans des méthodes
// ce qui permet d'écrire du JQuery et de faire de l'interaction avec son CSS/HTML en une ligne alors qu'il en faudrait quatre ou 5
// purs Javascripts.
// il faut placer ses balises script en bas de notre page html juste avant la fermeture du body pour que les scripts soient les derniers à être lu au
// chargement de la page. Ensuite la balise script qui inclut la librairie jquery doit être placé avant votre script personnel pour que votre script puisse utiliser
// la librairie j'eury. Si vous ne le faite par votre script ne pourra pas être lu puisqu'il sera impossible au navigateur d'interpréter le J'eury.


$(document).ready(function(){
    console.log('Je peux maintenant écrire du code JQuery');
});