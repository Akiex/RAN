document.addEventListener('DOMContentLoaded', function() {


            let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'
];

        let colors = [
    "#FF0000", // KeyA -> Rouge
    "#00FF00", // KeyB -> Vert
    "#0000FF", // KeyC -> Bleu
    "#FFFF00", // KeyD -> Jaune
    "#FF00FF", // KeyE -> Magenta
    "#00FFFF", // KeyF -> Cyan
    "#800000", // KeyG -> Marron
    "#808000", // KeyH -> Olive
    "#008000", // KeyI -> Vert foncé
    "#800080", // KeyJ -> Violet
    "#FFA500", // KeyK -> Orange
    "#A52A2A", // KeyL -> Brun
    "#808080", // KeyM -> Gris
    "#C0C0C0", // KeyN -> Argent
    "#FFC0CB", // KeyO -> Rose
    "#FFD700", // KeyP -> Or
    "#ADD8E6", // KeyQ -> Bleu clair
    "#F08080", // KeyR -> Rouge clair
    "#90EE90", // KeyS -> Vert clair
    "#20B2AA", // KeyT -> Bleu sarcelle
    "#9370DB", // KeyU -> Violet clair
    "#FF6347", // KeyV -> Tomate
    "#4682B4", // KeyW -> Bleu acier
    "#DAA520", // KeyX -> Or foncé
    "#B22222", // KeyY -> Rouge foncé
    "#DC143C"  // KeyZ -> Cramoisi
];


    
    
    document.addEventListener('keydown', function(event){

        let code = event.key.toLowerCase();
        let squares = document.querySelector('.square')
        
        for(let i = 0; i < alphabet.length; i++){
            let color = colors[i]
            let alpha = alphabet[i]
            // let colorIndex = alphabet.indexOff(code)
            if(alpha === code){
                squares.style.backgroundColor = color;
                break;
            } else {
                squares.style.backgroundColor = '';
            }
            
        }
    });
});

    // document.addEventListener('keydown', function(event) {
    // let code = event.key.toLowerCase();
    // //Choisi l'event KEY toLowerCase(en minuscule)
    // if (code >= 'a' && code <= 'z') {
    //     // SI la touche enfoncée est a et Z
    //     let index = code.charCodeAt(0) - 'a'.charCodeAt(0);
    //     //parcoure un tableau avec un index donné 
    //     // start a 0 et 0 = a
        
    //     let square = document.querySelector('.square');

    //     // squares.forEach(square => {

    //         square.style.backgroundColor = colors[index];

    //     // });
    // }
    // });
    // });