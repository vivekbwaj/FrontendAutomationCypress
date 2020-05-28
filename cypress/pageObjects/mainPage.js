/// <reference types="Cypress" />

const launchPersonalDemo = "button[value='personal']";
const launchBusinessDemo = "button[value='business']";

import { navigate, click,clickLinkText, enter, logInfo } from "../support/actions";

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

        /**
     * Click "Register" link
     */
    gotoRegistrationPage(){
        clickLinkText('Register');
    },
};
