const parallax = () => {
    function setVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVh();
    window.addEventListener('resize', setVh);

    const projectItems = document.querySelectorAll('.projects__item');
    let rafScheduled = false;

    function applyParallaxTransform(element, fallbackSpeed, offset) {
        if (!element) return;
        const speed = parseFloat(element.dataset.speed) || fallbackSpeed;
        const translateY = offset * -speed;
        element.style.transform = `translate3d(0, ${translateY}px, 0)`;
    }

    function updateParallax() {
        const viewportHeight = window.innerHeight;
        projectItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const offset = rect.top + rect.height / 2 - viewportHeight / 2;

            applyParallaxTransform(
                item.querySelector('.bg-thumbnail'),
                0.8,
                offset
            );
            applyParallaxTransform(item.querySelector('.stick'), 0.5, offset);
        });
    }

    const onScroll = () => {
        if (!rafScheduled) {
            requestAnimationFrame(() => {
                updateParallax();
                rafScheduled = false;
            });
            rafScheduled = true;
        }
    };

    window.addEventListener('scroll', onScroll);
};

export default parallax;
