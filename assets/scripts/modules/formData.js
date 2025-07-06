const formData = () => {
    const form = document.querySelector('.js-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
};

export default formData;
