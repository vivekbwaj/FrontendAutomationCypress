/// <reference types="Cypress" />

const clubCatch = 'a[href="/shop/club-catch/"]';


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
    },

    /**
     * Verify that all search results contain the keyword
     * @param {clubCatch} clubCatch
     */
    goToClubCatchPage(){
        cy.get(clubCatch).click();
    }
};
