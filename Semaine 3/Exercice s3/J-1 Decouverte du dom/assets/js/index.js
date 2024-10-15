document.addEventListener('DOMContentLoaded', function () {
    // Exercice 1 : Sélectionner et afficher le footer en utilisant sa classe
let footerDom = document.querySelector('.footer');
    console.log(footerDom);

    // Exercice 2 : Sélectionner et afficher le paragraphe à l'intérieur du footer
let pFooterDom = document.querySelector('.footer p');
    console.log(pFooterDom);
    // Exercice 3 : Sélectionner et afficher tous les paragraphes de la page
let pDom = document.querySelectorAll('p');
    console.log(pDom);
    // Exercice 4 : Sélectionner et afficher les paragraphes du premier article
let firstArtDom = document.querySelector('article');
let pFirstArtDom = firstArtDom.querySelectorAll('p');
    console.log(pFirstArtDom);
    
    // Exercice 5 : Sélectionner le dernier paragraphe du 1er article

let artDom = document.querySelector('article');
let pArtDom = artDom.querySelectorAll('p');
let lastPArtDom = pArtDom[pArtDom.length -1];
    console.log(lastPArtDom);

    
    
});