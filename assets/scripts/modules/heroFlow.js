const heroFlow = () => {
    const preloader = document.querySelector('.preloader'),
        heroPreview = document.querySelector('.hero__prev'),
        contentInner = document.querySelector('.main--home .hero .container'),
        videoInner = document.querySelector('.main--home .hero .hero__inner');

    if (!preloader || !heroPreview || !contentInner || !videoInner) return;

    preloader.classList.add('hide');

    setTimeout(() => {
        heroPreview.classList.add('show');

        setTimeout(() => {
            heroPreview.classList.add('hide');
        }, 500);

        contentInner.classList.add('show', 'animation--simple');
        videoInner.classList.add('show');
    }, 50); 

    preloader.addEventListener(
        'transitionend',
        () => {
            preloader.remove();
        },
        { once: true }
    );

    heroPreview.addEventListener(
        'transitionend',
        () => {
            heroPreview.remove();
        },
        { once: true }
    );
};

export default heroFlow;
