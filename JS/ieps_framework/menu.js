// SLIDER !!

function toggleVisible(btnClass, elementClass) {
    const Btns = document.querySelectorAll(btnClass);

    for (let Btn of Btns) {
        Btn.addEventListener('click', function() {
            this.parentElement.querySelector(elementClass).classList.toggle('visible');
            removeVisible(btnClass, elementClass);
        });
    }
}

function removeVisible(btnClass, elementClass) {
    window.addEventListener('click', function (e){
        console.log(e.target.closest('btnClass'));
        // Si ce n'est pas le btn
        if (!(e.target.matches(btnClass) || e.target.closest(btnClass))) {
            document.querySelector(elementClass).classList.remove('visible');
        }
    });

}


// TOGGLE "visible" sur le sous-menu "dropdown"
toggleVisible('.menu-dropdown-btn', '.menu-dropdown-menu');
// TOGGLE "visible" sur le menu "slider"
toggleVisible('.menu-slider-btn', '.menu-slider-menu');

// Supprimer le ".visible" quand on clique autre part.
