/// <reference types="Cypress" />


import { navigate, click, pageLanding, enter, logInfo,children,clickFirst } from "../support/actions";

export const clubCatch = {

    /**
     * Verify that user lands on the correct page
     * @param {pathname} pathname
     * @param {href} href
     */
    successfullyLandedOnClubCatchPage(pathname,href){
        pageLanding(pathname,href);
    },
};
