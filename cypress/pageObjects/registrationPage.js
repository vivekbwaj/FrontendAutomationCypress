/// <reference types="Cypress" />

const logonButton = "a[id='BendigoBankHeaderConfig-16378-re-mega-menu-desc-logo-row-logon-button']";

import { navigate, click,urlContains, isVisible, logInfo } from "../support/actions";

export const registrationPage = {

    /**
     * Perfectly landed on registration page
     * @param {string} path
     */
    landedOnRegistrationPage(path) {
        urlContains(path);
        isVisible(logonButton);
    },
};
