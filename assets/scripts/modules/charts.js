const charts = () => {
    const wrapper = document.querySelector('.canvas-columns');
    if (!wrapper) return;

    const canvases = wrapper.querySelectorAll('canvas');
    const img = wrapper.querySelector('img');

    if (!canvases.length || !img) return;

    const draw = () => {
        const totalParts = canvases.length;
        const partWidth = img.width / totalParts;

        canvases.forEach((canvas, index) => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = partWidth;
            canvas.height = img.height;

            ctx.drawImage(
                img,
                index * partWidth,
                0,
                partWidth,
                img.height,
                0,
                0,
                partWidth,
                img.height
            );
        });
    };

    if (img.complete) {
        draw();
    } else {
        img.onload = draw;
    }
};

export default charts;
