const projectsFilter = () => {
    const filterItems = document.querySelectorAll('.js-filter');

    if (!filterItems.length) return;

    filterItems[0].classList.add('item--active');

    filterItems.forEach((filter) => {
        filter.addEventListener('click', () => {
            filterItems.forEach((box) => {
                box.classList.remove('item--active');
            });

            filter.classList.add('item--active');
        });
    });
};

export default projectsFilter;
