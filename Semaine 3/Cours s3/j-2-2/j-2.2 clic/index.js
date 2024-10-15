document.addEventListener('DOMContentLoaded', function() {
    
    let buttonDOM = document.querySelector('.button')
    let isShown = false;
    buttonDOM.addEventListener('click', function (event) {
        let squareDOM = document.querySelector('.lime-square');
        
        //Version compréssé
        squareDOM.classList.toggle('visible')
        
        
        // Version décompréssé
        
        // isShown = !isShown;
        
        // if(isShown){
        //     squareDOM.classList.add('visible')
        // } else {
        //     squareDOM.classList.remove('visible')
        // }
    });
    
});
