/// <reference types="Cypress" />

const searchBar = "div[role='combobox'] div input";
const searchResultsContainer = "div[role='combobox'] div div div ul"

import { navigate, click, pageLanding, enter, logInfo,children,clickFirst } from "../support/actions";

export const homePage = {
    /**
     * Navigate to url
     * @param {url} url
     */
    navigateToUrl(url) {
        navigate(url);
    },

    /**
     * Type in the search keyword
     * @param {searchBar} searchBar
     */
    enterSearchText(searchtext) {
        enter(searchBar,searchtext);
    },

    /**
     * Type in the search keyword
     * @param {searchResultsContainer} searchResultsContainer
     */
    getSearchResults() {
        return children(searchResultsContainer);
    },

    /**
     * Click the first search result
     */
    clickFirstSearchResult() {
        clickFirst(this.getSearchResults());
    },

    /**
     * Verify that user lands on the correct page
     * @param {pathname} pathname
     * @param {href} href
     */
    successfullyLandedOnSearchResultsPage(pathname,href){
        pageLanding(pathname,href);
    },

    /**
     * Verify that all search results contain the keyword
     * @param {string} keyword
     */
    verifyAllSearchResultsAreCorrect(keyword){
        this.getSearchResults().each((c)=>{
            let searchResult =c.find('div span',true).text();
            cy.log(searchResult);
            expect(searchResult).to.contains(keyword);
        });
    }
};
