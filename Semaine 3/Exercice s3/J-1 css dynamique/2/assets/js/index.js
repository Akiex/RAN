document.addEventListener('DOMContentLoaded', function() {

// Ce tableau contient la couleur de fond de chaque élément :
// l'élément 0 aura red, l'élément 1 aura blue, ...
let colors = ['red', 'blue', 'yellow', 'green', 'salmon', 'orange', 'purple', 'pink', 'navy', 'gold'];

// Ce tableau contient la position top/left de chaque élément :
// l'élément 0 aura top/left 1 à 1, l'élément 1 aura top/left à 2, ...
let positions = [1, 2, 10, 3, 4, 9, 5, 6, 8, 7];

/******************************** TODO  ********************************/
// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded

   // Récupérer TOUS les éléments ayant la classe js-magic-square
let jsMagicSquareDom = document.querySelectorAll('.js-magic-square');
   // Pour chaque élément de la liste précédente
    jsMagicSquareDom.forEach((objet, i) => { 
      // forEach* : Pour chaque*  'objet' et 'i'
      // Il parcours le tableau et chaque carré
      
// Le carré 0 sera rouge et a 1em du top et 1em de la gauche
    
      
      // Récupérer la position depuis le tableau positions
      let pos = positions[i];
      // Création d'un variable qui prend le tableau 'Positions' et le parcours
      // avec 'i'
      
      // Affecter à la propriété de style top : la position concaténée avec l'unité 'em'
      objet.style.top = pos + 'em';
      // Pour chaque 'objet'= Carré(récupéré avec querySelector) on affecte
      // En 'em' un position selon le tableau parcouru avec 'i'
      
      // Affecter à la propriété de style left : la position concaténée avec l'unité 'em'
      objet.style.left = pos + 'em';
      // Pour 'Concaténée' on utilise '+' 
      // donc pos(tableau[positions] parcouru par i) '+'(mix les deux) et 'em'(Unité de mesure)
      
      // Récupérer la couleur de fond de l'élement depuis le tableau colors
      let color = colors[i];
      // On affecte une variable pour parcourir le tableau couleur grace a 'i'
      
      
      // Affecter la couleur à la propriété de style background
      objet.style.backgroundColor = color;
      // Chaque 'objet' est styilisé grace a la variable color qui parcours le tableau
      // A chaque itération il pose une couleur a un carré different
      // 0 = rouge / 1 = bleu etc...
    })  
});
// Tout ça peut être fait grace a une BOUCLE FOR
// for (let i = 0; i < jsMagicSquareDom, i++) {
//   let pos = positions[i];
//   let color = colors[i];
//   jsMagicSquareDom[i].style.backgroundColor = color;
//   jsMagicSquareDom[i].style.top = pos + 'em';
//   jsMagicSquareDom[i].style.left = pos + 'em';
// }