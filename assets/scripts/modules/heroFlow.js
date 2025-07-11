const heroFlow = () => {
    const preloader = document.querySelector('.preloader'),
        heroPreview = document.querySelector('.hero__prev'),
        contentInner = document.querySelector('.main--home .hero .container'),
        videoInner = document.querySelector('.main--home .hero .hero__inner');

    if (!preloader || !heroPreview || !contentInner || !videoInner) return;

    preloader.classList.add('hide');
    heroPreview.classList.add('show');
    setTimeout(() => {
        heroPreview.classList.add('hide');
    }, 500);
    contentInner.classList.add('show', 'animation--simple');
    videoInner.classList.add('show');

    setTimeout(() => {
        preloader.remove();
        heroPreview.remove();
    }, 2000);
};

export default heroFlow;
