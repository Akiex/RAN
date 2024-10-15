// 1. Au premier clic, mettre la couleur de fond du carré à rouge

// 2. Au second clic, mettre la couleur de fond du carré à bleu

// 3. Au troisième clic, remettre la couleur de fond par défaut

// 4. Au quatrième clic, on reboucle à 1.

// etc...
document.addEventListener('DOMContentLoaded', function(){
    let buttonDOM = document.querySelector('.js-button')
    let i = 0;
    let squareDOM = document.querySelector('.js-square');
    
    buttonDOM.addEventListener('click',function(){
        
        i++;// i(nbclicks) = i + 1;
        
        // if(i === 1){
        // squareDOM.style.backgroundColor = 'red';
        
            
        // } else if(i === 2){
        //     squareDOM.style.backgroundColor = 'blue';
        
            
        // } else  {
        //     squareDOM.style.backgroundColor = '';
        //     i = 0;
        // } 
    
        //Méthode 2
        if(i % 3 === 1){
            squareDOM.style.backgroundColor = 'red';
        
            
        }else if (i % 3 === 2) {
            squareDOM.style.backgroundColor = 'blue';
        
            
        }else {
            squareDOM.style.backgroundColor = '';
        }
        
    })
    
    
})