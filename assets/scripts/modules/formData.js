const formData = () => {
    const form = document.querySelectorAll('.js-form');
    if (!form.length) return;

    form.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    });
};

export default formData;
