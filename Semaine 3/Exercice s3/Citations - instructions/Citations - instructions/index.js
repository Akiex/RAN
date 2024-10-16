
// 1. Pour chaque popup, lorsque l'utilisateur clique sur le bouton de fermeture x,
// masquer la popup en utilisant la classe appropriée

// 2. Pour chaque bouton du menu, lorsque l'utilisateur clique dessus,
// afficher la popup correspondante (qui a la même position dans la liste)
// en utilisant la classe appropriée
document.addEventListener('DOMContentLoaded',function(){
   let menuButtons = document.querySelectorAll('.js-menu button');
   let closeDOM = document.querySelector('.close-button')
   let closeButtons = document.querySelectorAll('.popup .close-button');
   let popupDOM = document.querySelector('.js-popup')
      
        
  closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', function() {
      let popup = closeButton.closest('.popup');
      popup.classList.remove('visible');
    });
  });

    let popup = document.querySelectorAll('.popup');
   menuButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      // Trouver la popup correspondante en utilisant l'index
      
      popup[index].classList.add('visible');
        });

});
});