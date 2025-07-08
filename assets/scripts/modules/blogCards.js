const blogCards = () => {
    const parentSection = document.querySelector('.blog');
    if (!parentSection) return;

    const blogCards = parentSection.querySelectorAll('.blog-card'),
        moreBtn = parentSection.querySelector('.js-more');

    if (!blogCards.length) return;

    let visibleCount = 12;

    blogCards.forEach((card, i) => {
        if (i >= visibleCount) {
            card.style.display = 'none';
        }
    });

    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            blogCards.forEach((card) => {
                card.style.display = '';
            });

            moreBtn.remove();

            parentSection.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        });
    }
};

export default blogCards;
