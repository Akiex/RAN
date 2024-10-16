document.addEventListener('DOMContentLoaded', function() {
    // 1. Lorsque l'utilisateur clique sur l'icone d'aide (classe js-help), ouvrir la popup
    let helpDOM = document.querySelector('.js-help')
    helpDOM.addEventListener('click', function(event) {

        let popupDOM = document.querySelector('.popup-help')
        popupDOM.classList.add('visible')
})
    // 2. Lorsque l'utilisateur clique sur la croix en haut à droite de la popup d'aide (classe close-button), fermer la popup


    let closeHelpDOM = document.querySelector('.close-button')
    closeHelpDOM.addEventListener('click', function(event) {

        let popupDOM = document.querySelector('.popup-help')
        popupDOM.classList.remove('visible')
    })

    // 3. Lorsque l'utilisateur clique sur l'icône menu (en haut à gauche), ouvrir / fermer le menu gauche
    let toggleMenuDOM = document.querySelector('.js-menu')
    toggleMenuDOM.addEventListener('click', function(event){
        
        let toggleDOM = document.querySelector('.left-panel')
        toggleDOM.classList.toggle('unvisible')
    })

    // 4. Lorsque l'utilisateur appuie sur la touche F (comme fullscreen)
    
    document.addEventListener('keydown', function(event){
        let key = event.key
        let headerDOM = document.querySelector('.header')
        let footerDOM = document.querySelector('.footer')
        if(key === 'f') {
                headerDOM.classList.toggle('hidden');
                footerDOM.classList.toggle('hidden');
        };
    // Afficher / masquer le header et le footer
});
    
});