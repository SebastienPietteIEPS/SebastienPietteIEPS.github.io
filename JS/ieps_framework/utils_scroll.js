// Effet Scroll
//

    const observer = new IntersectionObserver(function(observables){
        for (let observable of observables) {
            if (observable.isIntersecting){
                observable.target.classList.add('visible');
            }
        }
    }, {
        threshold: .8
    });

    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
    for (let scrollTrigger of scrollTriggers) {
        observer.observe(scrollTrigger);
    }
