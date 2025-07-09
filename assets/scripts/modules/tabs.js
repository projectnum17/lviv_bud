const tabs = () => {
    const tabsParent = document.querySelector('.js-tab-btns');
    if (!tabsParent) return;

    const tabs = document.querySelectorAll('.js-tab-btn');
    const tabsContent = document.querySelectorAll('.js-tab-box');

    if (tabs.length === 0 || tabsContent.length === 0) return;

    const hideTabContent = () => {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item--active');
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item--active');
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('js-tab-btn')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;
