// ouvrirVanneEau();

// let niveau = 0;

// while (niveau < 100) {
//     niveau = prompt('Lire capteur de niveau');
// }

// fermerVanneEau();

// allumerChauffage();

// let temperature = 0;

// while (temperature < 60) {
//     temperature = prompt('capteur temperature');
// }

// eteindreChauffage();

// // ****************************************************************************

// for (let n = 1; n <= 150; n++) {
//     prendreUneFeuilleDeBrick();

//     mettreLaFarce();

//     plierLaFeuilleDeBrick();
// }

// for (let c = 1; c <= 3; c++) {
//     for (let i = 1; i <= 50; i++) {
//         mettreLesNemsDansLeCuiseur();
//     }
//     lancerLaCuisson();

//     egoutterLesNems();
// }

// //*****************************************************************************
// function JDR() {

//     let choixJoueur1 = prompt('Définissez vos point de vie entre 1 et 100');
//     let choixJoueur2 = prompt('Définissez vos point d\'attaque entre 1 et 3');

//     let pvJoueur = Number(choixJoueur1);
//     console.log('Point de vie du joueur '+pvJoueur);

//     let paJoueur = Number(choixJoueur2);
//     console.log('Point d\'attaque du joueur '+paJoueur);

//     let pvEnnemi = Math.ceil(Math.random() * 100); //ceil = ~ au superieur
//     console.log('Point de vie du Ennemi '+pvEnnemi);

//     let paEnnemi = Math.ceil(Math.random() * 3);   //floor = ~ au inferieur
//     console.log('Point d\'attaque '+paEnnemi);

//     while (pvJoueur > 0 && pvEnnemi > 0) {
//         pvEnnemi = pvEnnemi - paJoueur;
//         if (pvEnnemi > 0) {
//             pvJoueur = pvJoueur - paEnnemi;
//         }
//         console.log('Point de vie du joueur '+pvJoueur);
//         console.log('Point de vie de l\'ennemi '+pvEnnemi);
//     } 
//     if (pvEnnemi <= 0) {
//         return "Le joueur a gagné";
//     } else {
//         return " L\'ennemi a gagné";
//     }

// }
// let resultat = JDR();

// console.log((resultat));
// *****************************************************************************

// function calculatrice() {

//     let choixUser1 = prompt('chiffre entre 0 et 9');
//     let operateur = prompt('Operateur +-*/');
//     let choixUser2 = prompt('chiffre entre 0 et 9');


//     let nombre1 = Number(choixUser1);
//     let nombre2 = Number(choixUser2);

//     let somme;

//     if (operateur === "+") {
//         somme = nombre1 + nombre2;
//     }
//     else if (operateur === "-") {
//         somme = nombre1 - nombre2;
//     }
//     else if (operateur === "*") {
//         somme = nombre1 * nombre2;
//     }
//     else {
//         somme = nombre1 / nombre2;
//     }

//     return somme;
// }

// let result = calculatrice();

// console.log("le resultat est " + (result));

// *****************************************************************************
// Remise de prix

// ****************************************************************************
// //Moyenne tableau
// function moyenne(){
//     let somme = 0;
//     let notes = [];
//     let notesSaisi;
//     //     let somme = 0;
//     //     let notes = [12, 12.5, 6, 19, 5, 5.5];
//     //     let n = notes.length;

//     while(notesSaisi !== 'stop') {
//         notesSaisi = prompt('entrez un nombre (ou "stop" pour arrêter) :');
//         if (notesSaisi !== 'stop') {

//             notes.push(parseFloat(notesSaisi));

//         }
//     }
//     //Calcule la longueur du tableau après l'avoir remplis
//     let n = notes.length;

//     //somme des notes
//     for (let i = 0; i<n; i++){
//         somme += notes[i]
//     }
//     //moyenne
//     let resultat = somme/n;
//     return resultat;
// }
// let result = moyenne();
// console.log(result);

// *****************************************************************************
// Mois et Annee 

// let mois;
// let annee;

// function estUnMoisDeTrenteJours() {

//     if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// function estUnMoisDeTrenteEtUnJours() {

//     if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }

// function estAnneeBissextile() {
    
//     if (annee % 4 === 0 && annee % 100 !== 1 || annee % 400 === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

    
// function nombreDeJours() {
    
//     mois = Number(prompt('saisissez un mois entre 1 et 12'));
//         if(mois < 1 || mois > 12) {
//             return console.log('Date incorect')
//         }
//     annee = Number(prompt('Saisissez une annee entre 1558 et 2023'));
//         if(annee < 1558 || annee > 2023) {
//             return console.log('Date incorect')
//         }
    
//     let estTrente = estUnMoisDeTrenteJours();
//     let estTrenteEtUn = estUnMoisDeTrenteEtUnJours();
//     let estBissextile = estAnneeBissextile();
    
//     if (estTrenteEtUn === 1) {
//         return 31;
//     } else if (estTrente === 1) {
//         return 30;
//     } else if (estBissextile === 1){
//         return 29;
//     } else {
//         return 28;
//     }
// }

// let nombreJours = nombreDeJours(mois, annee);
// console.log('Nombre de jours est ' + nombreJours);
//     *****************************************************************************
//     Remise de prix
//     function remise(){
//         let prix = [];
//         let notesSaisi;


//         while(notesSaisi !== 'stop') {
//             notesSaisi = prompt('entrez un nombre (ou "stop" pour arrêter) :');
//             if (notesSaisi !== 'stop') {

//                 prix.push(parseFloat(notesSaisi));

//             }
//         }
//         //Calcule la longueur du tableau après l'avoir remplis
//         let n = prix.length;

//         //moyenne notes
//         for (let i = 0; i<n; i++){
//             prix[i] = prix[i] - (prix[i]*0.1)
//         }
//         //afficher prix
//         let resultat = prix;
//         return resultat;
//     }
//********************************** OU **************************************
// let saisiePrix = prompt('sasir une liste de prix, séparés par une virgule');
// let prix = saisiePrix.split(',');

// console.log(prix);

// for (let i = 0; i < prix.length; i++) {
//     let prixARemiser = Number(prix[i])
//     prix[i] = prixARemiser - (prixARemiser * 0.1);
    
//     console.log(prix[i])
// }

// console.log(prix);






// *****************************************************************************

// Machine a laver
let eau;
let chaleur;
let tps;

function cycleTambours(nTours) {
    for (let i = 0; i < Ntour; i++) {
    }
    
}
function essorage() {
    while(tps<30) {
        cycleTambours()
    }
}

function vidange() {
    while(eau>0) {
        vidangeEau()
    }
}

function remplissage() {
    while(eau<50) {
        ouvrirVanneEau()
    }
    while (chaleur<40) {
        allumerChauffage()
    }
}

function adoucissant() {
    remplissage();
    console.log('mettre adoucissant');
    cycleTambours(10);
    vidange();
}

function rincage() {
    remplissage();
    cycleTambours(10);
    vidange();
    
}

function lavage() {
    remplissage();
    
    mettreLessive();
    
    for(let i = 1; i<= 2; i++){
        cycleTambours(20);
    }
    vidange();
}



function lavage() {
    remplissage();
    console.log('Mettre la lessive');
    cycleTambours(20);
    vidange();
}

function cycle() {
    lavage();
    for(let i = 0; i = 4; i++) {
        rincage();
    }
    adoucissant();
    for (let i = 0; i = 4; i++) {
        rincage();
    }
    essorage();
    
}