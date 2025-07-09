// const animationObserver = () => {
//     const animatedElements = document.querySelectorAll(
//         '.animation--custom, .animation--simple'
//     );

//     if (!animatedElements.length) return;

//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('_animated');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         {
//             threshold: 0.5,
//         }
//     );

//     animatedElements.forEach((el) => observer.observe(el));
// };
// export default animationObserver;
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

                // Анимация появления
                if (
                    el.classList.contains('animation--custom') ||
                    el.classList.contains('animation--simple')
                ) {
                    el.classList.add('_animated');
                }

                // Анимация чисел
                if (el.hasAttribute('data-number')) {
                    const target = parseInt(el.getAttribute('data-number'), 10);
                    const duration = 2000; // общее время анимации (мс)
                    const stepTime = 20;
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
            threshold: 0.5,
        }
    );

    animatedElements.forEach((el) => {
        if (el) observer.observe(el);
    });
};

export default animationObserver;