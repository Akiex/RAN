document.addEventListener('DOMContentLoaded', function() {

// Ce tableau contient la couleur de fond de chaque élément :
// l'élément 0 aura red, l'élément 1 aura blue, ...
let colors = ['red', 'blue', 'yellow', 'green', 'salmon', 'orange', 'purple', 'pink', 'navy', 'gold'];

// Ce tableau contient la position top/left de chaque élément :
// l'élément 0 aura top/left 1 à 1, l'élément 1 aura top/left à 2, ...
let positions = [1, 2, 9, 4, 5, 8, 3, 10, 6, 7];

/******************************** TODO  ********************************/
// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded

   // Récupérer TOUS les éléments ayant la classe js-magic-square
let jsMagicSquareDom = document.querySelectorAll('.js-magic-square');
   // Pour chaque élément de la liste précédente
    jsMagicSquareDom.forEach((element, index) => {
      // Récupérer la position depuis le tableau positions
    let pos = positions[index];
      // Affecter à la propriété de style top : la position concaténée avec l'unité 'em'
    element.style.top = `${pos}em`;
      // Affecter à la propriété de style left : la position concaténée avec l'unité 'em'
    element.style.left = `${pos}em`;
      // Récupérer la couleur de fond de l'élement depuis le tableau colors
    let color = colors[index];
      // Affecter la couleur à la propriété de style background
      element.style.backgroundColor = color;
    })  
});