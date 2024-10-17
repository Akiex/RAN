document.addEventListener('DOMContentLoaded', function() {
 let terrainDOM = document.querySelector('.Terrain');
 let caseDOM = document.querySelectorAll('.case')
 let gameDOM = document.querySelector('.game')
 let gameOn = true;
 let board = ['', '', '', '', '', '', '', '', ''];
 let joueur = ['X', 'O'];
 let round = joueur[0];
 let reponse = document.querySelector('.reponse')




 function checkWin() {
  // Vérification des lignes
  // si le l'élément a l'indix "i" n'est pas vide et
  //  qu'il est égale a l'index i+2 et i+3
  for (let i = 0; i < 8; i += 3) {
   if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
    return true;
   }
  }
  // Vérife des colonnes
  for (let i = 0; i < 8; i += 3) {
   if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
    return true;
   }
  }
  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
   return true;
  }

  if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
   return true;
  }
  return false;
 
  
 }

 function checkDraw() {
  return board.every(cell => cell != '');
 }


 function cellClick(event) {
  
  let index = parseInt(event.target.dataset.index);
  // vérification si la partie est toujours en cours et que la case et vide
  if (board[index] === '' && gameOn) {
   //  Place le symbole du joueur
   event.target.textContent = round;
   board[index] = round;
  }

  //  changement de token joueur
  round = round === joueur[0] ? joueur[1] : joueur[0];
  //  Si round = "X" la condition round === joueur[0] est vraie donc on switch
  //  si elle est fausse c'est que roud est = "O" donc c'est a "X" joué

  if (checkWin()) {
   gameOn = false;
   reponse.textContent = (`le joueur ${round} a gagné !`);
  }
  else if (checkDraw()) {
   gameOn = false;
   reponse.textContent = ('match nul !');
  }
 }


 caseDOM.forEach(cell => {
  cell.addEventListener('mousedown', cellClick);
 });


 
 
});