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
        const actual = $(registerPage.header).getText();
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

    it('should verify the `Choose a language preference` label is present', () => {
        const actual = $(registerPage.chooseLangLabel).isDisplayed();
        expect(actual).true;
    });

    it('should verify the `Choose a language preference` select menu has 3 options: `English, Español, 简体中文`', () => {
        const languageMenu = $$(registerPage.languages);
        const languagesIncluded = languageMenu.every(language => registerPageE.languagesList.includes(language.getText()));
        expect(languagesIncluded).true;
    });

    it('should verify the `UserName` label is present', () => {
        const actual = $(registerPage.userNameLabel).isDisplayed();
        expect(actual).true;
    });

    it('should verify the `Available!` message appears if correct credentials were entered into `UserName` input', () => {
        $(registerPage.userNameInput).setValue(registerPageE.userName);
        browser.keys('Tab');
        browser.pause(1000);

        if($(registerPage.userNameInUseErrorMsg).isDisplayed()){
            $(registerPage.userNameSuggestedRadioBtn1).click();

            browser.waitUntil(
                () => $(registerPage.availableMsg).isDisplayed() === true,
                {
                    timeout: 2000,
                    timeoutMsg: 'No text displayed'
                },
            );
            const actual = $(registerPage.availableMsg).getText();
            expect(actual).eq(registerPageE.userNameAvailableMsg);
        } else {
            const actual = $(registerPage.userNameInput).getValue();
            expect(actual).eq(registerPageE.userName);
        }
        $(registerPage.userNameInput).clearValue();
    });

    it('should verify the `A Username is a required entry.` message appears if `UserName` input stays empty', () => {
        $(registerPage.userNameInput).click();
        browser.keys('Tab');
        browser.pause(1000);

        const errorMsg = $(registerPage.userNameInUseErrorMsg);
        const errorMsgText = errorMsg.getText();
        expect(errorMsgText).eq(registerPageE.userNameEmptyInputMsg);
    });
});