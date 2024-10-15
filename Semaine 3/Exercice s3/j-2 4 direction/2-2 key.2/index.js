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
        // Code de la touche appuyer (attention a la casse)
        let code = event.key.toUpperCase();
        let element = document.querySelector('.square')
        
        if( code === 'N') {
            element.style.backgroundColor = '#e2fcfb'
            element.textContent = 'Nord'
        } else if(code === 'E') {
            element.style.backgroundColor ='Darkred'
            element.textContent = 'Est'
        } else if(code === 'S') {
            element.style.backgroundColor = 'yellow'
            element.textContent = 'Sud'
        } else if(code === 'O') {
            element.style.backgroundColor = 'darkblue'
            element.textContent = 'Ouest'
        } else {
            element.textContent = 'Inconnu'
            element.style.backgroundColor = ''
        }
        
    })

});
