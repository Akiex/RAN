    const playerForm = document.getElementById('player-form');
    const resultDiv = document.getElementById('result');

    let joueur = {
      DDG: 10,
    };
    let ennemi = {
      DDG: 10,
    };

    playerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      joueur.nom = document.getElementById('player-name').value;
      joueur.HP = parseInt(document.getElementById('player-hp').value);
      joueur.AP = parseInt(document.getElementById('player-ap').value);

      ennemi.HP = Math.ceil(Math.random() * 100);
      ennemi.AP = Math.ceil(Math.random() * 3);
      ennemi.nom = prompt('Entrer le nom de votre nemesis');

      JDR();
    });

    function attack(attaquant, defenseur) {
      let resultatAttaque = Math.ceil(Math.random() * 20 + 1);

      if (resultatAttaque > 18) {
        defenseur.HP -= attaquant.AP * 2;
        console.log('Coup critique ! ' + attaquant.nom + ' inflige ' + attaquant.AP * 2 + ' points de dégats à ' + defenseur.nom);
      } else if (defenseur.DDG >= Math.ceil(Math.random() * 100)) {
        console.log(defenseur.nom + ' esquive l\'attaque de ' + attaquant.nom);
      } else {
        defenseur.HP -= attaquant.AP;
        console.log(attaquant.nom + ' inflige ' + attaquant.AP + ' points de dégats à ' + defenseur.nom);
      }
    }

    function JDR() {
      while (joueur.HP > 0 && ennemi.HP > 0) {
        attack(joueur, ennemi);
        console.log('Point de vie du joueur ' + joueur.HP);
        console.log('Point de vie de l\'ennemi ' + ennemi.HP);

        if (ennemi.HP <= 0) {
          resultDiv.textContent = 'VICTOIRE !';
          resultDiv.classList.add('show'); // Afficher la boîte de résultat
          return;
        }

        attack(ennemi, joueur);
        console.log('Point de vie du joueur ' + joueur.HP);
        console.log('Point de vie de l\'ennemi ' + ennemi.HP);

        if (joueur.HP <= 0) {
          resultDiv.textContent = 'TRY AGAIN !';
          resultDiv.classList.add('show'); // Afficher la boîte de résultat
          return;
        }
      }
    }
















// function getValidValue(message, min, max) {
//     let value;
//     do {
//         value = parseInt(prompt(message));
//         if (isNaN(value) || value < min || value > max) {
//             alert('On ne triche pas saisissez un nombre valide entre '+ min +' et '+ max + ' ! ');
//             }
//     } while (isNaN(value) || value < min || value > max);
//     return value;
// }

// let joueur = {
//     HP : getValidValue('Choisissez vos points de vie entre 1 et 100',1, 100),
//     AP : getValidValue('Choisissez vos points d\'attaque entre 1 et 3',1, 3),
//     DDG : 10,
    
// };

// console.log('vos stats sont : ', joueur);

// let ennemi = {
//     HP : Math.ceil(Math.random() * 100),
//     AP : Math.ceil(Math.random()*3),
//     DDG : 10,
    
// }

// console.log('Les stats Ennemi sont : ', ennemi);
// function attack(attaquant, defenseur){
//     let resultatAttaque = Math.ceil(Math.random() * 20 + 1);
    
//     if(resultatAttaque > 18){
//         defenseur.HP -= attaquant.AP * 2;
//         console.log('Coup critique ! ' + attaquant.nom + ' inflige ' 
//         + attaquant.AP*2 + ' \ point de dégats à ' + defenseur.nom)
//     } else if (defenseur.DDG >= Math.ceil(Math.random()*100)) {
//         console.log(defenseur.nom + ' \ esquive l\'attaque de ' + attaquant.nom)
//     } else {
//         defenseur.HP -= attaquant.AP;
//         console.log(attaquant.nom + ' \  inflige ' + attaquant.AP + ' \  points de dégats à ' + defenseur.nom)
//     }
// }

// function JDR(){
//     joueur.nom = prompt('Entrer votre nom  ');
//     ennemi.nom = prompt('Entrer le nom de votre nemesis ');
    
//     while(joueur.HP > 0 && ennemi.HP > 0) {
//         attack(joueur, ennemi);
//         console.log('point de vie du joueur ' + joueur.HP)
//         console.log('point de vie de l\'ennemi ' + ennemi.HP)
        
//         if(ennemi.HP <= 0) {
//             return 'VICTOIRE !'
//         }
//         attack(ennemi, joueur);
//         console.log('point de vie du joueur ' + joueur.HP)
//         console.log('point de vie de l\'ennemi ' + ennemi.HP)
        
//         if(joueur.HP <=0 ) {
//             return 'TRY AGAIN !'
//         }
        
//     }
// }


// let jdr = JDR();
// console.log(jdr);




