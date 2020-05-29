/// <reference types="Cypress" />

import { mainPage } from "../pageObjects/mainPage";
import { BASE_URL } from "../config/config";

describe("Test Registration Page", () => {
    /**
     * Test navigation to registration landing page
     */
    it("Launch Registration page through right-link", () => {
        mainPage.navigateToUrl(BASE_URL);
        mainPage.gotoRegistrationPage();
    });
});
