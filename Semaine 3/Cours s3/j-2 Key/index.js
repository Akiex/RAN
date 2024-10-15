document.addEventListener('DOMContentLoaded', function() {

    
    
    document.addEventListener('keydown', function(event) {
        //Event déclenché quand la touche est enfoncée 'Keyboard Event'
        // Récupérer le code de la touche appuyer
        let code = event.code;
        
        // Récupérer l'élement HTML
        let element = document.querySelector('.red-square')
        
        if (code === 'ArrowLeft') {
            element.style.left = '10px';
            
        } else if(code === 'ArrowRight') {
            element.style.left = '500px';
            
        } else if(code === 'ArrowUp') {
            element.style.top = '10px';
            
        } else if(code === 'ArrowDown') {
            element.style.top = '500px';
        }
            
        
    })
    
});
