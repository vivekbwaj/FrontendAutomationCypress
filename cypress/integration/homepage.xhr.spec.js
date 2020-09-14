/// <reference types="Cypress" />

import { homePage } from "../pageObjects/catchHomepage";
import { BASE_URL } from "../config/config";

describe("Validate some xhr requests on homepage", () => {
    /**
     * Test navigation to correct search results page
     */
    it("Assert some xhr requests", () => {
        cy.server();
        cy.route('POST','**/v2/event/custom').as("customXHR");
        cy.route('GET','**/meta.json').as("metaXHR");
        homePage.navigateToUrl(BASE_URL);

        cy.get("@customXHR").then((xhr) =>{
            expect(xhr.status).to.eq(200);
        });
        cy.get('@metaXHR').its('response.body').should('have.property','clubActive').and('eql',false);
    });
});

