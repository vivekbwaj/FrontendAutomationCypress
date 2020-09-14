/// <reference types="Cypress" />

// const searchBar = "div[role='combobox'] div input";
// const searchResultsContainer = "div[role='combobox'] div div div ul"

import { navigate, click, pageLanding, enter, logInfo,children,clickFirst } from "../support/actions";

export const common = {
 
    /**
     * Verify that all search results contain the keyword
     * @param {string} counttext
     */
    verifyCartCount(counttext){
        cy.get('a[data-testid="minicart-reference"]').then((ele) => {
            let cartCountText = ele.find('div[data-testid="cart-items-amount"]').text();
            cy.log(cartCountText);
            expect(cartCountText).to.equal(counttext);
        });
    }
};
