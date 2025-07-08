const headerFlow = () => {
    const mainHero = document.querySelector('.main--home .hero');
    const header = document.querySelector('.header');
    const openFeedbackModal = document.querySelectorAll('.js-open-modal');
    const closeFeedbackModal = document.querySelector('.js-close-modal');
    const feedbackModal = document.querySelector('.js-feedback-modal');

    if (!header) return;

    openFeedbackModal.forEach((button) => {
        button.addEventListener('click', () => {
            feedbackModal.classList.add('shown');
            document.body.style.overflow = 'hidden';
        });
    });

    closeFeedbackModal.addEventListener('click', () => {
        feedbackModal.classList.remove('shown');
        document.body.style.overflow = '';
    });

    feedbackModal.addEventListener('click', (e) => {
        const formBox = feedbackModal.querySelector('.form-box');

        if (!formBox.contains(e.target)) {
            feedbackModal.classList.remove('shown');
            document.body.style.overflow = '';
        }
    });

    window.addEventListener('scroll', () => {
        if (mainHero) {
            const heroBottom = mainHero.getBoundingClientRect().bottom;
            if (heroBottom <= 50) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        } else {
            if (window.scrollY > 5) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }
    });
};

export default headerFlow;
