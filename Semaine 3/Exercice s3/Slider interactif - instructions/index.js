// IMPORTANT : Toujours commencer par ajouter le listener sur l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
    
    let inputDOM = document.querySelector('.js-number-input');
    let displayDOM = document.querySelector('.js-number-display');
    displayDOM.textContent = inputDOM.value;
    
    inputDOM.addEventListener('input',function(event) {
        
        
        
        displayDOM.textContent = event.target.value;
        
        
    })
    
    
    
    
    
});
// 1. Initialisation de la valeur affichée

// - Récupérer la valeur de l'élément ayant la classe "js-number-input"
// - La recopier dans l'élément ayant la classe "js-number-display"

// 2. Mise à jour automatique de la valeur affichée lorsque l'utilisateur bouge le slider
//   - Ajouter un listener sur l'événement "change" de l'élément ayant la classe "js-number-input"
//   - Récupérer la valeur de l'élément "js-number-input"
//   - La recopier dans l'élément ayant la classe "js-number-display"
