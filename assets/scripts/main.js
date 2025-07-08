'use strict';

import headerFlow from './modules/header.js';
import asideMenu from './modules/asideMenu.js';
import heroCanvas from './modules/heroCanvas.js';
import slidersConfig from './modules/slidersConfig.js';
import formData from './modules/formData.js';
import projectsFilter from './modules/projectsFilter.js';
import blogCards from './modules/blogCards.js';
import videoObserver from './modules/videoObserver.js';

document.addEventListener('DOMContentLoaded', () => {
    headerFlow();
    asideMenu();
    heroCanvas();
    slidersConfig();
    formData();
    projectsFilter();
    blogCards();
    videoObserver();
});
