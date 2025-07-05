const asideMenu = () => {
    const toggleVisibleMenu = document.querySelector('.js-button'),
        menuBlock = document.querySelector('.aside-menu'),
        header = document.querySelector('.header'),
        body = document.body;

    let hadScrolledClass = false;

    toggleVisibleMenu.addEventListener('click', () => {
        let isOpen = menuBlock.classList.contains('shown');

        if (!isOpen) {
            hadScrolledClass = header.classList.contains('header--scrolled');

            if (hadScrolledClass) {
                header.classList.remove('header--scrolled');
            }

            toggleVisibleMenu.classList.add('transformed');
            header.classList.add('header--transparent');
            menuBlock.classList.add('shown');
            body.style.overflow = 'hidden';
        } else {
            header.classList.remove('header--transparent');
            toggleVisibleMenu.classList.remove('transformed');
            menuBlock.classList.remove('shown');

            if (hadScrolledClass) {
                header.classList.add('header--scrolled');
            }

            body.style.overflow = '';
        }
    });
};

export default asideMenu;
