'use strict';

import heroFlow from './modules/heroFlow.js';
import headerFlow from './modules/header.js';
import asideMenu from './modules/asideMenu.js';
import heroCanvas from './modules/heroCanvas.js';
import slidersConfig from './modules/slidersConfig.js';
import parallax from './modules/parallax.js';
import formData from './modules/formData.js';
import projectsFilter from './modules/projectsFilter.js';
import blogCards from './modules/blogCards.js';
import videoObserver from './modules/videoObserver.js';
import canvasDeco from './modules/canvasDeco.js';
import progressBar from './modules/progressBar.js';
import tabs from './modules/tabs.js';
import animationObserver from './modules/animationObserver.js';

document.addEventListener('DOMContentLoaded', () => {
    heroFlow();
    headerFlow();
    asideMenu();
    heroCanvas();
    parallax();
    slidersConfig();
    formData();
    projectsFilter();
    blogCards();
    videoObserver();
    canvasDeco();
    progressBar();
    tabs();
    animationObserver();
});
