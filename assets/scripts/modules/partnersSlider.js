const partnersSlider = () => {
    const parentSection = document.querySelector('.partners'),
        sliderEl = parentSection.querySelector('.partners__gall');
    if (!sliderEl) return;

    return new Swiper(sliderEl, {
        slidesPerView: 4,
        spaceBetween: 48,
        speed: 1100,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            prevEl: parentSection.querySelector('.btn--prev'),
            nextEl: parentSection.querySelector('.btn--next'),
        },
    });
};

export default partnersSlider;
