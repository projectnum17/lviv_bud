const heroCanvas = () => {
    const canvas = document.querySelector('#heroCanvas');
    const hero = document.querySelector('.hero');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');

    let baseWidth = 660;
    let baseHeight = 764;

    const resizeCanvas = () => {
        const displayWidth = window.innerWidth;

        if (displayWidth < 992) {
            baseWidth = 460;
            baseHeight = 564;
        }

        if (displayWidth < 768) {
            baseWidth = 300;
            baseHeight = 300;
        }

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    };

    const drawCanvas = (scale = 1) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(7, 7, 7, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 18, 8, 0.8)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = 'destination-out';

        const rectWidth = baseWidth * scale;
        const rectHeight = baseHeight * scale;
        const x = (canvas.width - rectWidth) / 2;
        const y = (canvas.height - rectHeight) / 2;

        ctx.fillRect(x, y, rectWidth, rectHeight);

        ctx.globalCompositeOperation = 'source-over';
    };

    const onScroll = () => {
        const heroRect = hero.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = Math.min(1, Math.max(0, -heroRect.top / windowHeight));

        const scale = 1 + progress * 4;

        drawCanvas(scale);
    };

    window.addEventListener('resize', () => {
        resizeCanvas();
        drawCanvas();
    });

    window.addEventListener('scroll', onScroll);

    resizeCanvas();
    drawCanvas();
};

export default heroCanvas;
