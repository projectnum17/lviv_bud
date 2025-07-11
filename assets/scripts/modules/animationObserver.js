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

                const isSimple = el.classList.contains('animation--simple');
                const isCustom = el.classList.contains('animation--custom');
                const isCounter = el.hasAttribute('data-number');

                if (isSimple || isCustom) {
                    el.classList.add('_animated');
                }

                if (isCounter) {
                    const startCounter = (el, target) => {
                        const duration = 2000;
                        const stepTime = 50;
                        const steps = Math.ceil(duration / stepTime);

                        let increment;
                        if (target > 500) {
                            increment = 3000;
                        } else if (target >= 100) {
                            increment = 10;
                        } else {
                            increment = 1;
                        }

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
                    };

                    const target = parseInt(el.getAttribute('data-number'), 10);

                    const parentWithSimple = el.closest('.animation--simple');

                    if (
                        parentWithSimple &&
                        !parentWithSimple.classList.contains('_animated')
                    ) {
                        const mutationWatcher = new MutationObserver(() => {
                            if (
                                parentWithSimple.classList.contains('_animated')
                            ) {
                                startCounter(el, target);
                                mutationWatcher.disconnect();
                            }
                        });

                        mutationWatcher.observe(parentWithSimple, {
                            attributes: true,
                            attributeFilter: ['class'],
                        });
                    } else {
                        startCounter(el, target);
                    }
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
