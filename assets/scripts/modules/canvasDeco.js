const canvasDeco = () => {
    const rect = document.querySelector('#canvasDeco');
    if (!rect) return;

    const ctx = rect.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
    gradient.addColorStop(0, 'rgba(7, 7, 7, 0.7)');
    gradient.addColorStop(1, '#001208');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    const rectWidth = 300;
    const rectHeight = 380;
    const x = (rect.width - rectWidth) / 5.5;
    const y = (rect.height - rectHeight) / 2;

    ctx.clearRect(x, y, rectWidth, rectHeight);
};

export default canvasDeco;
