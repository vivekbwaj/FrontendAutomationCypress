/// <reference types="Cypress" />

import { mainPage } from "../pageObjects/mainPage";
import { BASE_URL } from "../config/config";

describe("Access accounts information", () => {
    /**
     * Test navigation to demo accounts
     */
    it.skip("Launch Bendigo Bank Personal Demo", () => {
        mainPage.navigateToUrl(BASE_URL);
        mainPage.gotoPersonalAccounts();
    });
});
