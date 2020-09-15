/// <reference types="Cypress" />

import { homePage } from "../pageObjects/catchHomepage";
import { common } from "../pageObjects/common";
import { clubCatch } from "../pageObjects/clubCatch";
import { BASE_URL } from "../config/config";

describe("Generate HAR file and save it", () => {
    /**
     * go to catch.com.au and then click club active
     */
    before(() => {
        // start recording
        cy.recordHar();
      });
    it(`Launch Catch Website > click club catch`, () => {
        homePage.navigateToUrl(BASE_URL);
        common.goToClubCatchPage();
        clubCatch.successfullyLandedOnClubCatchPage('/shop/club-catch/','/shop/club-catch/');
    });
    after(() => {
        // HAR will be saved as users.spec.har
        // at the root of the project
        cy.saveHar({ outDir: './cypress/har' });
      });
});

