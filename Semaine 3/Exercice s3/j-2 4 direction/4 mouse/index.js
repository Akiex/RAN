// Faire en sorte que l'élément ayant la classe .js-diddle suive la souris
// lorsque celle-ci bouge
document.addEventListener('DOMContentLoaded',function(){
    document.addEventListener('mousemove',function(event){
        let x = event.clientX;
        let y = event.clientY;
        
        let diddle = document.querySelector('.js-diddle')
        diddle.style.left = x + 'px';
        diddle.style.top = y + 'px';
        
        
    })
    
    
})
