const progressBar = () => {
    const progressBoxes = document.querySelectorAll('.js-box');
    if (!progressBoxes.length) return;

    const animateValue = (el, target) => {
        let current = 0;
        const step = 10;
        const duration = 700;
        const startTime = performance.now();

        el.textContent = '0%';

        const update = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            let value = Math.floor((progress * target) / step) * step;
            value = Math.min(value, target);

            el.textContent = value + '%';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target + '%';
            }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const box = entry.target;
                    const valEl = box.querySelector('.js-val');
                    const barEl = box.querySelector('.js-bar');

                    if (valEl && barEl) {
                        const percentValue = parseFloat(
                            valEl.dataset.value || '0'
                        );

                        animateValue(valEl, percentValue);

                        barEl.style.setProperty(
                            '--target-width',
                            percentValue + '%'
                        );
                        void barEl.offsetWidth;
                        barEl.classList.add('_animated');
                    }

                    observer.unobserve(box);
                }
            });
        },
        {
            threshold: 0.8,
        }
    );

    progressBoxes.forEach((box) => observer.observe(box));
};

export default progressBar;
