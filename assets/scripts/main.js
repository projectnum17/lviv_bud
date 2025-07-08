'use strict';

import headerFlow from './modules/header.js';
import asideMenu from './modules/asideMenu.js';
import partnersSlider from './modules/partnersSlider.js';
import formData from './modules/formData.js';
import projectsFilter from './modules/projectsFilter.js';
import blogCards from './modules/blogCards.js';
import videoObserver from './modules/videoObserver.js';

document.addEventListener('DOMContentLoaded', () => {
    headerFlow();
    asideMenu();
    partnersSlider();
    formData();
    projectsFilter();
    blogCards();
    videoObserver();
});
