const heroCanvas = () => {
    const canvas = document.querySelector('#heroCanvas');
    const hero = document.querySelector('.hero');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');

    let baseWidth = 660;
    let baseHeight = 764;
    let scale = 1;
    let needsUpdate = true;

    const updateBaseSize = () => {
        const displayWidth = window.innerWidth;
        if (displayWidth < 768) {
            baseWidth = 300;
            baseHeight = 300;
        } else if (displayWidth < 992) {
            baseWidth = 460;
            baseHeight = 564;
        } else {
            baseWidth = 660;
            baseHeight = 764;
        }
    };

    const resizeCanvas = () => {
        updateBaseSize();
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    };

    const drawCanvas = () => {
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

    const updateScale = () => {
        const heroRect = hero.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(1, Math.max(0, -heroRect.top / windowHeight));
        scale = 1 + progress * 4;
    };

    const renderLoop = () => {
        if (needsUpdate) {
            drawCanvas();
            needsUpdate = false;
        }
        requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', () => {
        updateScale();
        needsUpdate = true;
    });

    window.addEventListener('resize', () => {
        resizeCanvas();
        updateScale();
        needsUpdate = true;
    });

    resizeCanvas();
    updateScale();
    needsUpdate = true;
    renderLoop();
};

export default heroCanvas;
