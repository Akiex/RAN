/**************************************************************/
/*                        Consignes                           */
/**************************************************************/
/*

L'objectif de cet exercice est de pratiquer les événements JS
sur les éléments HTML, ainsi que les fonctions.

Il s'agit de plusieurs petits exercices indépendants.
Pour chacun d'eux, il est attendu d'implémenter le code selon
une méthode permettant d'avoir un code lisible et compréhensible.

1. Dans la partie "Main Program",
on y trouve uniquement les points d'entrée de chaque exercice.
Un point d'entrée est le point de départ de toute procédure de traitement.
Dans ces exercices, il d'agira des événements sur des éléments HTML.

Exemple :
document.querySelector('.js-damier').addEventListener('click', onDamierClick);

2. Dans la partie "Event listeners", on trouvera les fonctions qui seront
appelées lorsque l'utilisateur effectuera des actions sur les éléments HTML.
Ces fonctions contiendront l'algorithme de traitement de l'événement.

Exemple :
function onDamierClick() {
  clearCheckboard();
  createDamier();
}

3. Dans la partie "Fonctions", on trouvera les fonctions qui seront utilisées
pour le traitement des événements. Elles seront appelées par
les "Event listeners".

Exemple :
function clearCheckboard() {
  ...
}
function createDamier() {
  ...
}

*/
/**************************************************************/
/*                         Données                            */
/**************************************************************/

// Les variables globales sont déclarées ici.
// Uniquement si nécéssaire.
let board = document.querySelector('.checkerboard');
let cat = document.querySelector('.cat');
let cell = document.querySelectorAll('.js-cell');
let bobby = board.querySelector('.bobby');
let buttonDamier = document.querySelector('.js-damier');
let buttonDisco = document.querySelector('.js-disco');
let buttonLaby = document.querySelector('.js-labyrinth');
let bobbyPosition = {x: 0, y: 0};
let catPosition = {x: 0, y: 0};

/**************************************************************/
/*                        Fonctions                           */
/**************************************************************/
function clearCheckboard() {
  for(let i = 0; i < cell.length; i++){
    cell[i].classList.remove('black')
    cell[i].classList.remove('disco-color1')
    cell[i].classList.remove('disco-color2')
    cell[i].classList.remove('disco-color3')
    cell[i].classList.remove('disco-color4')
    cell[i].classList.remove('disco-color5')
  }

}

function createDamier() {

  for (let i = 0; i < 64; i++) {

    if ((i % 2 === 0 && Math.floor(i / 8) % 2 === 0) || (i % 2 !== 0 && Math.floor(i / 8) % 2 !== 0)) {
      cell[i].classList.toggle('black')
    }

  }
};

function createDisco() {
  for (let x = 0; x < 64; x++) {
    let random = (Math.floor(Math.random() * 5) + 1);
    cell[x].classList.toggle(`disco-color${random}`);

  }
};

function createLaby() {

  const labyrinth = [
    1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 1,
    1, 1, 1, 0, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1,
  ]
  for (let l = 0; l < 64; l++) {
  
    if (labyrinth[l] === 1) {
      cell[l].classList.toggle('black')
    }
  }
};

function mouseDown(event) {
  if (event.target.classList.contains('js-cell')) {
    event.target.classList.remove('boom');
    event.target.classList.add('push');

  }
};

function mouseUp(event) {
  if (event.target.classList.contains('js-cell')) {
    event.target.classList.remove('push');
    event.target.classList.add('pull');

  }
};

function dblClickBoom(event) {
  if (event.target.classList.contains('js-cell')) {
    event.target.classList.remove('push');
    event.target.classList.remove('pull');
    event.target.classList.add('boom')

  }
};

function bobbyPop(event){
  if(event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight'){
    bobby.classList.add('visible')
  }
}

function bobbyMove(event) {
  if (event.key === 'ArrowUp' && bobbyPosition.y > 0) {
    bobbyPosition.y--;
  } else if (event.key === 'ArrowDown' && bobbyPosition.y < 7) {
    bobbyPosition.y++;
  } else if (event.key === 'ArrowLeft' && bobbyPosition.x > 0) {
    bobbyPosition.x--;
  } else if (event.key === 'ArrowRight' && bobbyPosition.x < 7) {
    bobbyPosition.x++;
  }
  updateBobbyPosition();
}

function updateBobbyPosition() {
  bobby.style.top = `${bobbyPosition.y * 3}rem`;
  bobby.style.left = `${bobbyPosition.x * 3}rem`;
}

function moveCat() {
  let direction = Math.floor(Math.random() * 4);
  if (direction === 0 && catPosition.y > 0) {
    catPosition.y--;
  } else if (direction === 1 && catPosition.y < 7) {
    catPosition.y++;
  } else if (direction === 2 && catPosition.x > 0) {
    catPosition.x--;
  } else if (direction === 3 && catPosition.x < 7) {
    catPosition.x++;
  }
  updateCatPosition();
}

function updateCatPosition() {
  cat.style.top = `${catPosition.y * 3}rem`;
  cat.style.left = `${catPosition.x * 3}rem`;
}
  // Les fonctions (appelées par les Event Listener) sont déclarées ici.

  /**************************************************************/
  /*                      Event listeners                       */
  /**************************************************************/

  // Les Event Listener sont déclarés ici.
  function onButtonDamier() {

    clearCheckboard();
    createDamier();
  }

  function onButtonDisco() {
    clearCheckboard();
    createDisco();
  }

  function onButtonLabyrinth() {
    clearCheckboard();
    createLaby();
  }
  /**************************************************************/
  /*                       Main Program                         */
  /**************************************************************/

  // IMPORTANT Rappel : Pas de traitement ici,
  // uniquement les déclarations des Event Listener.

  document.addEventListener('DOMContentLoaded', () => {

    console.log('Damier');

    // 1. Lorsque l'utilisateur clique sur le bouton "js-damier",
    // Afficher un damier dans la grille
    buttonDamier.addEventListener('click', onButtonDamier);
    // TIP : Ajouter la classe .black sur les cases concernées


    // 2. Lorsque l'utilisateur clique sur le bouton "js-disco",
    // Afficher un dancefloor de lumières dans la grille
    buttonDisco.addEventListener('click', onButtonDisco);
    // TIP : Ajouter les classes .color1, ... .color5 aléatoirement


    // 3. Lorsque l'utilisateur clique sur le bouton "js-labyrinth",
    // Afficher le motif présent sur le bouton dans la grille
    buttonLaby.addEventListener('click', onButtonLabyrinth);
    // TIP : Ajouter la classe .black sur les cases concernées


    // 4. Lorsque l'utilisateur enfonce le bouton de la souris sur une case (classe "js-cell"),
    // Afficher "push" sur fond jaune (utiliser la classe "push")
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('dblclick', dblClickBoom)
    // Puis, lorsqu'il relâche le bouton, 
    // afficher "pull" sur fond orange (utiliser la classe "pull")
    // Enfin, s'il double clique sur la case,
    // afficher "boom" sur fond rouge (utiliser la classe "boom")


    // 5. Lorsque l'utilisateur appuie sur une des 4 flèches du clavier,
    // Afficher bobby et le déplacer sur le grille (de case en case)
    document.addEventListener('keydown', bobbyPop);
    document.addEventListener('keydown', bobbyMove);
    // TIP : Ajouter la classe visible sur la div ayant l'id "bobby"
    // Le déplacer de case en case
    // dans la direction de la flèche appuyée


    // 6. Chaque seconde, un chat se déplace aléatoirement sur les cases du plateau
    setInterval(moveCat, 1000);
    // TIP : Ajouter un timer qui déplace la div ayant l'id "cat" d'une case
    // dans une direction aléatoire toutes les secondes

  });