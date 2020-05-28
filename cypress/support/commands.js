import 'cypress-file-upload';
import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';

/**
 * Get Auth Token
 */
Cypress.Commands.add('getAuthToken', (username, password) => {
    const base = Cypress.env('API_BASE_URL') || 'https://demo.bendigobank.com.au/banking/sign_in';
    const url = base + '/api/account/signin';
    return cy
        .request({
            method: 'POST',
            url: url,
            body: { 'data[Identifier]': username, 'data[Password]': password }
        })
        .its('responseHeaders')
        .then(res => res.clientauth);
});

/**
 * Clear mock server
 */
Cypress.Commands.add('clearMock', () => {
    cy.server({ enable: false });
})

/**
 * Mock Login Api calls
 */
Cypress.Commands.add('mockLoginApi', () => {
    cy.server();
    cy.route('POST', '/api/account/signin').as('authToken');
});

/**
 * Mock Account Api Calls
 */
Cypress.Commands.add('mockAccountApi', () => {
    cy.server()
        .fixture('account/accountDetails').as('details')
        .fixture('account/inventory').as('inventoryDetails')
        .route('GET', '/api/account/detail', '@details').as('mockDetails')
        .route('GET', '/experience/account/promotions/clientinventory', '@inventoryDetails').as('mockInventory');
});

Cypress.Commands.add('mockApi', (apiName) => {
    cy.server();
    switch (apiName) {
        case 'AccountDetails':
            cy.fixture('account/accountDetails').as('details')
                .route('GET', '/api/account/detail', '@details').as('mockDetails');
            break;
        case 'Inventory':
            cy.fixture('account/inventory').as('inventoryDetails')
                .route('GET', '/experience/account/promotions/clientinventory', '@inventoryDetails').as('mockInventory');
            break;
        default:
            cy.task('info', 'Please use a valid mock name');
            break;
    }
});

// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
