const parallax = () => {
    function setVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVh();
    window.addEventListener('resize', () => {
        setVh();
        updateItems();
    });

    const projectItems = Array.from(
        document.querySelectorAll('.projects__item')
    );
    let lastScrollY = window.scrollY;
    let ticking = false;

    const cachedItems = [];

    function updateItems() {
        cachedItems.length = 0;
        projectItems.forEach((item) => {
            cachedItems.push({
                item,
                bg: item.querySelector('.bg-thumbnail'),
                stick: item.querySelector('.stick'),
            });
        });
    }

    updateItems();

    function applyParallaxTransform(element, fallbackSpeed, offset) {
        if (!element) return;
        const speed = parseFloat(element.dataset.speed) || fallbackSpeed;
        const translateY = offset * -speed;
        element.style.transform = `translate3d(0, ${translateY}px, 0)`;
    }

    function updateParallax() {
        const viewportHeight = window.innerHeight;

        cachedItems.forEach(({ item, bg, stick }) => {
            const rect = item.getBoundingClientRect();
            const offset = rect.top + rect.height / 2 - viewportHeight / 2;

            applyParallaxTransform(bg, 0.8, offset);
            applyParallaxTransform(stick, 0.5, offset);
        });
    }

    function onFrame() {
        const currentScrollY = window.scrollY;
        if (currentScrollY !== lastScrollY) {
            updateParallax();
            lastScrollY = currentScrollY;
        }
        requestAnimationFrame(onFrame);
    }

    requestAnimationFrame(onFrame);
};

export default parallax;
