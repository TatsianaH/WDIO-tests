import { expect } from 'chai';
import { homePageD,signInPageD, registerPageD } from './data/data.json';
import { homePage, signInPage, registerPage } from './data/selectors.json';

describe('User Registration', () => {
    before('open home page usps', () => {
        browser.url(homePageD);
    });

    it('user should be redirected to `SignIn` page after `Register/SignIn` button was clicked', () => {
        $(homePage.registerSignInLink).click();
        const actual = $(signInPage.header).getText();
        expect(actual).eq(signInPageD.header);
    });

    it('user should be redirected to `Register` page after `Register` button was clicked', () => {
        $(signInPage.registerLink).click();
        const actual = $(registerPage.header).getText();
        expect(actual).eq(registerPageD.header);
    });

    it('should verify `Register` page title', () => {
        const actual = browser.getTitle();
        expect(actual).eq(registerPageD.title);
    });
});