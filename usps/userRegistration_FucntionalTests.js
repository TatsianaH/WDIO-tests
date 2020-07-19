import { expect } from 'chai';
import { homePage, signInPage, registerPage } from './data/selectors.json';
import { homePageUrl, registerPageE, signInPageE } from './data/expected.json';

describe('User Registration', () => {
    before('open home page usps', () => {
        browser.url(homePageUrl);
    });

    it('user should be redirected to `SignIn` page after `Register/SignIn` button was clicked', () => {
        $(homePage.registerSignInLink).click();
        const actual = $(signInPage.header).getText();
        expect(actual).eq(signInPageE.header);
    });

    it('user should be redirected to `Register` page after `Register` button was clicked', () => {
        $(signInPage.registerLink).click();
        const actual = $(registerPage.header).getText();
        expect(actual).eq(registerPageE.header);
    });

    it('should verify `Register` page title', () => {
        const actual = browser.getTitle();
        expect(actual).eq(registerPageE.title);
    });

    it('should verify `Register` page header is `Create Your USPS.com Account`', () => {
        const actual = $(registerPage.header);
        expect(actual).eq(registerPageE.header);
    });

    it('should verify the `Verify Address` button is not displayed.', () => {
        const actual = $(registerPage.verifyAddressBtn).isDisplayed();
        expect(actual).eq(false);
    });

    it('should verify the `Step 1` is present on the page', () => {
        const stepsList = $$(registerPage.steps);
        for (let i = 0; i < stepsList.length; i++) {
            const actual = stepsList[i].getText();
            if (actual.includes('Step 1')) {
                expect(actual).eq(registerPageE.step1);
            }
        }
    });
});