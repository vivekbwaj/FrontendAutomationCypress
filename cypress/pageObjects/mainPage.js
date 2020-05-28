/// <reference types="Cypress" />

const launchPersonalDemo = "button[value='personal']";
const launchBusinessDemo = "button[value='business']";

import { click, enter, selectDropdown, wait } from "../support/actions";

export const mainPage = {
    /**
     * Navigate to url
     * @param {url} url
     */
    navigateToUrl(url) {
        navigate(url);
    },

    /**
     * Click "launch personal demo" button
     * @param {launchPersonalDemo} launchPersonalDemo
     */
    gotoPersonalAccounts() {
        click(launchPersonalDemo);
    },
};
