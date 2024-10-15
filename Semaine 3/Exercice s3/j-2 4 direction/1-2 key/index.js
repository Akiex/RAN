document.addEventListener('DOMContentLoaded', function() {

    // document.addEventListener('keydown', function(event) {
    //     //Event déclenché quand la touche est enfoncée 'Keyboard Event'
    //     // Récupérer le code de la touche appuyer
    //     let code = event.code;
        
    //     // Récupérer l'élement HTML
    //     let element = document.querySelector('.red-square')
        
    //     if (code === 'ArrowLeft') {
    //         element.style.left = '10px';
            
    //     } else if(code === 'ArrowRight') {
    //         element.style.left = '500px';
            
    //     } else if(code === 'ArrowUp') {
    //         element.style.top = '10px';
            
    //     } else if(code === 'ArrowDown') {
    //         element.style.top = '500px';
    //     }
            
        
    // })
    // Si la touche appuyée est N, afficher Nord dans le carré ET mettre en fond la couleur bleu glace

// Si la touche appuyée est E, afficher Est dans le carré ET mettre en fond la couleur rouge foncé

// Si la touche appuyée est S, afficher Sud dans le carré ET mettre en fond la couleur jaune

// Si la touche appuyée est O, afficher Ouest dans le carré ET mettre en fond la couleur bleu foncé

// Si la touche appuyée n'est aucune des 4 précédentes, afficher Inconnu dans le carré ET mettre en fond la couleur par défaut
    document.addEventListener('keydown', function(event){
        let code = event.code;
        let element = document.querySelector('.square')
        
        if( code === 'KeyN') {
            element.style.backgroundColor = 'iceblue'
            element.textContent = 'Nord'
        } else if(code === 'KeyE') {
            element.style.backgroundColor ='Darkred'
            element.textContent = 'Est'
        } else if(code === 'KeyS') {
            element.style.backgroundColor = 'yellow'
            element.textContent = 'Sud'
        } else if(code === 'KeyO') {
            element.style.backgroundColor = 'darkblue'
            element.textContent = 'Ouest'
        } else {
            element.textContent = 'Inconnu'
            element.style.backgroundColor = 'blanchedalmond'
        }
        
    })

});
