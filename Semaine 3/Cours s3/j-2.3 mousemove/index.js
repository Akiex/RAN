document.addEventListener('DOMContentLoaded', function() {
    
    document.addEventListener('mousemove',function(event){
        
        let x = event.clientX;
        let y = event.clientY;
        
        
        let squareDOM = document.querySelector('.navy-square')
        squareDOM.style.left = x + 'px';
        squareDOM.style.top = y + 'px';
        
    })
    
});
