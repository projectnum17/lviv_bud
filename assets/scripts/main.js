'use strict';

import headerFlow from './modules/header.js';
import asideMenu from './modules/asideMenu.js';
import partnersSlider from './modules/partnersSlider.js';
import formData from './modules/formData.js';

document.addEventListener('DOMContentLoaded', () => {
    headerFlow();
    asideMenu();
    partnersSlider();
    formData();
});
