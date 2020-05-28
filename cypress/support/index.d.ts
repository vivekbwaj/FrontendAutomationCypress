/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to clear mocks
         * @example cy.clearMock()
         */
        clearMock(): Chainable<any>;

        /**
         * Custom command to Mock Login Api
         */
        mockLoginApi(): Chainable<any>;

        /**
         * Custom command to Mock Account api
         */
        mockAccountApi(): Chainable<any>;

        /**
         * Custom command to mock any api
         */
        mockApi(String: apiName): Chainable<any>;

    }
}