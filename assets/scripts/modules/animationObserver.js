const animationObserver = () => {
    const animatedElements = document.querySelectorAll(
        '.animation--custom, .animation--simple, [data-number]'
    );

    if (!animatedElements || !animatedElements.length) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const el = entry.target;

                if (
                    el.classList.contains('animation--custom') ||
                    el.classList.contains('animation--simple')
                ) {
                    el.classList.add('_animated');
                }

                if (el.hasAttribute('data-number')) {
                    const target = parseInt(el.getAttribute('data-number'), 10);
                    const duration = 2000;
                    const stepTime = 40;
                    const steps = Math.ceil(duration / stepTime);

                    const increment = target > 100 ? 10 : 1;
                    let current = 0;

                    const counterInterval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            el.textContent = target;
                            clearInterval(counterInterval);
                        } else {
                            el.textContent = current;
                        }
                    }, stepTime);
                }

                observer.unobserve(el);
            });
        },
        {
            threshold: 0.4,
        }
    );

    animatedElements.forEach((el) => {
        if (el) observer.observe(el);
    });
};

export default animationObserver;
