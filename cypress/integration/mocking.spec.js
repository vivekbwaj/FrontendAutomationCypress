/// <reference types="Cypress" />

import { homePage } from "../pageObjects/catchHomepage";
import { common } from "../pageObjects/common";
import { BASE_URL } from "../config/config";

// describe("Test mocking of api requests", () => {
//     /**
//      * Test navigation to demo accounts
//      */
//     it("Launch Catch Website and mock meta.json api", () => {
//         cy.server();
//         cy.fixture('meta.json').as('meta.json.mock.response');
//         cy.route("GET","**/meta.json",'@meta.json.mock.response');
//         homePage.navigateToUrl(BASE_URL);
//     });
// });
describe("Test mocking of api requests using route2", () => {
    it("Launch Website and mock meta.json api using route2", () => {
        cy.fixture("meta.json").then(json => {
            cy.route2("GET", "**/meta.json", json)
        }); //route2() doesn't support specifying alias
        homePage.navigateToUrl(BASE_URL);
        common.verifyCartCount('100');
        cy.screenshot();
    });
});
