/// <reference types="Cypress" />

import { homePage } from "../pageObjects/catchHomepage";
import { BASE_URL } from "../config/config";

describe(`Test Search and navigation to product category page`, () => {
    /**
     * Test navigation to correct search results page
     */
    it(`Launch Catch Website > search > Select the first result`, () => {
        homePage.navigateToUrl(BASE_URL);
        homePage.enterSearchText('whey protein');
        homePage.getSearchResults().should('have.length.greaterThan',0);
        homePage.verifyAllSearchResultsAreCorrect('whey');
        homePage.clickFirstSearchResult();
        homePage.successfullyLandedOnSearchResultsPage('/search','search?query=whey+protein');
    });
});

