import { expect } from 'chai';
import {homePageD} from './data/data.json';
import {homePage} from './data/selectors.json';
import {signInPageD} from './data/data.json';
import {signInPage} from './data/selectors.json';

describe('User Registration', () => {
    before('open home page usps', () => {
        browser.url(homePageD);

    });

    it('user should be redirected to `SignIn` page after `Register/SignIn` button was clicked', () => {
        $(homePage.registerSignInLink).click();
        const actual = $(signInPage.header).getText();
        expect(actual).eq(signInPageD.header);
    });
});