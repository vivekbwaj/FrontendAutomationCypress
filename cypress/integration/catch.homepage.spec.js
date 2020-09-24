/// <reference types="Cypress" />

import { homePage } from "../pageObjects/catchHomepage";
import { BASE_URL } from "../config/config";

describe("Test Login", () => {
    /**
     * Test login
     */
    it("Launch Catch Website > goto login page and login", () => {
        cy.visit('https://www.catch.com.au')
        .viewport(1024, 768)
        .get('svg[data-testid="icon-user"]').click()
        // .get('input[name="login[email]"]').type('vivekbwaj.88@gmail.com')
        // .get('input[name="login[password]"]').type('password')
        // .get('button[id="button-login"]').click()
        .wait(4000)
        .percySnapshot('loginpage');
    });

});
