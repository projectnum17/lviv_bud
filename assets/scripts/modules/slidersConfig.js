const slidersConfig = () => {
    const baseConfig = {
        speed: 1100,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    };

    const createSlider = ({
        sectionSelector,
        sliderSelector,
        slidesPerView,
        spaceBetween,
        loop = true,
        extraOptions = {},
    }) => {
        const section = document.querySelector(sectionSelector);
        if (!section) return;

        const sliderEl = section.querySelector(sliderSelector);
        if (!sliderEl) return;

        return new Swiper(sliderEl, {
            ...baseConfig,
            slidesPerView,
            spaceBetween,
            loop,
            navigation: {
                prevEl: section.querySelector('.btn--prev'),
                nextEl: section.querySelector('.btn--next'),
            },
            ...extraOptions,
        });
    };

    const slidersConfig = () => {
        createSlider({
            sectionSelector: '.partners',
            sliderSelector: '.partners-swiper',
            slidesPerView: 4,
            spaceBetween: 48,
            loop: true,

            extraOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                },
            },
        });

        createSlider({
            sectionSelector: '.projects',
            sliderSelector: '.projects-swiper',
            slidesPerView: 2,
            spaceBetween: 64,
            loop: false,
            extraOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                },
            },
        });

        createSlider({
            sectionSelector: '.flats',
            sliderSelector: '.flats-swiper',
            slidesPerView: 4,
            spaceBetween: 40,
            loop: true,
            extraOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                },
            },
        });

        createSlider({
            sectionSelector: '.details',
            sliderSelector: '.details-swiper',
            slidesPerView: 3,
            spaceBetween: 40,
            loop: true,
            centeredSlides: true,

            extraOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            },
        });

        createSlider({
            sectionSelector: '.advantages',
            sliderSelector: '.advantages-swiper',
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            extraOptions: {
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
            },
        });
    };

    slidersConfig();
};

export default slidersConfig;
