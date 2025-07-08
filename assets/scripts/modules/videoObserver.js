const videoObserver = () => {
    const lazyVideos = Array.from(document.querySelectorAll('video.js-video'));

    if (!lazyVideos.length) return;

    if ('IntersectionObserver' in window) {
        const lazyVideoObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        const sources =
                            video.querySelectorAll('source[data-src]');

                        sources.forEach((source) => {
                            source.src = source.dataset.src;
                        });

                        video.load();
                        video.classList.remove('lazyVideo');
                        lazyVideoObserver.unobserve(video);
                    }
                });
            }
        );

        lazyVideos.forEach((video) => {
            lazyVideoObserver.observe(video);
        });
    } else {
        lazyVideos.forEach((video) => {
            const sources = video.querySelectorAll('source[data-src]');
            sources.forEach((source) => {
                source.src = source.dataset.src;
            });
            video.load();
            video.classList.remove('lazyVideo');
        });
    }
};

export default videoObserver;
