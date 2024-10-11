function getValidValue(message, min, max) {
    let value;
    do {
        value = parseInt(prompt(message));
        if (isNaN(value) || value < min || value > max) {
            alert('On ne triche pas saisissez un nombre valide entre '+ min +' et '+ max + ' ! ');
            }
    } while (isNaN(value) || value < min || value > max);
    return value;
}

let joueur = {
    HP : getValidValue('Choisissez vos points de vie entre 1 et 100',1, 100),
    AP : getValidValue('Choisissez vos points d\'attaque entre 1 et 3',1, 3),
    
    
};

console.log('vos stats sont : ', joueur);

let ennemi = {
    HP : Math.ceil(Math.random() * 100),
    AP : Math.ceil(Math.random()*3),
}

console.log('Les stats Ennemi sont : ', ennemi);


function JDR(){
while(joueur.HP > 0 && ennemi.HP > 0){
            let resultatAttaque = Math.ceil(Math.random() * 20 + 1);
        if (resultatAttaque > 18) {
            ennemi.HP = ennemi.HP - joueur.AP * 2;
            console.log('Réussite critique \ '+'les pv de l\'ennemi sont a : \ '+ennemi.HP);
        } else if (resultatAttaque < 5) {
            joueur.HP = joueur.HP - 1;
            console.log('Echec critique \ '+'les pv du joueur sont a : \ '+joueur.HP);
        } else {
            ennemi.HP = ennemi.HP - joueur.AP;
            console.log('Le joueur attaque \ '+'les point de vie de l\'ennemi sont a:\ '+ennemi.HP);
        }

if (ennemi.HP > 0) {
    resultatAttaque = Math.ceil(Math.random() * 20 + 1);
    if (resultatAttaque > 18) {
        joueur.HP = joueur.HP - ennemi.AP * 2;
        console.log('Réussite critique,\ '+'les pv du Joueur sont a :\ '+joueur.HP);
    } else if (resultatAttaque < 5) {
        ennemi.HP = ennemi.HP - 1;
        console.log('Echec critique,\ '+'les pv de l\'ennemi sont a :\ '+ennemi.HP);
    } else if (resultatAttaque > 5 && resultatAttaque < 18){
        joueur.HP = joueur.HP - ennemi.AP;
        console.log('L\'ennemi attaque,\ '+'les point de vie du joueur sont a :\ '+joueur.HP);
     } else if (joueur.HP <= 0){
         return('VICTOIRE !')
     } else {
         return('TRY AGAIN !')
     }
    }
}
}
let jdr = JDR();
console.log(jdr);