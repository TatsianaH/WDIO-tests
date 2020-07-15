import { expect } from 'chai';
import { homePageD, registerPageD } from './data/data.json';
import { homePage, signInPage, registerPage } from './data/selectors.json';
import { registerPageE, signInPageD } from './data/expected.json';

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
        expect(actual).eq(registerPageE.header);
    });

    it('should verify `Register` page title', () => {
        const actual = browser.getTitle();
        expect(actual).eq(registerPageE.title);
    });

    it('should verify the `Verify Address` button is not displayed.', () => {
        const actual = $(registerPage.verifyAddressBtn).isDisplayed();
        expect(actual).eq(false);
    });

    it('should choose `English` language in `Choose a language preferences`select form', () => {
        const english = $$(registerPage.chooseLangSelectMenu)[0];
        const actual = english.getValue();
        expect(actual).eq(registerPageE.languageValue);
    });

    it('should fill the `UserName` input', () => {
        $(registerPage.userNameInput).setValue(registerPageD.userName);
        const actual = $(registerPage.userNameInput).getValue();
        expect(actual).eq(registerPageE.userName);
    });

    it('should fill the `Password` input', () => {
        $(registerPage.passwordInput).setValue(registerPageD.password);
        const actual = $(registerPage.passwordInput).getValue();
        expect(actual).eq(registerPageE.password);
    });

    it('should fill the `Re-Type Password` input', () => {
        $(registerPage.passwordInput).setValue(registerPageD.password);
        const actual = $(registerPage.passwordInput).getValue();
        expect(actual).eq(registerPageE.password);
    });

    it('should choose `What is the name of your pet?` option in select form (First Question)', () => {
        const answerList = $$(registerPage.select1QSelectformList);

        answerList.forEach((option) => {
            const actual = option.getText();
            if(actual === registerPageE.firstQuestion){
                option.click();
                expect(actual).eq(registerPageE.firstQuestion);
            }
        });
    });

    it('should fill `Your answer` (First Question)', () => {
        $(registerPage.yourAnswerInput).setValue(registerPageD.answer1);
        const actual = $(registerPage.yourAnswerInput).getValue();
        expect(actual).eq(registerPageE.answer1);
    });

    it('should fill `Re-Type your answer` (First Question)', () => {
        $(registerPage.yourAnswerInput).setValue(registerPageD.answer1);
        const actual = $(registerPage.yourAnswerInput).getValue();
        expect(actual).eq(registerPageE.answer1);
    });

    it('should choose `In what city were you born?` option in select form (Second Question)', () => {
        const answerList = $$(registerPage.select2QSelectformList);

        answerList.forEach((option) => {
            const actual = option.getText();
            if(actual === registerPageE.secondQuestion){
                option.click();
                expect(actual).eq(registerPageE.secondQuestion);
            }
        });
    });

    it('should fill `Your answer` (Second Question)', () => {
        $(registerPage.yourAnswerInput2).setValue(registerPageD.answer2);
        const actual = $(registerPage.yourAnswerInput2).getValue();
        browser.keys('tab');
        expect(actual).eq(registerPageE.answer2);
    });

    it('should fill `Re-Type your answer` (Second Question)', () => {
        $(registerPage.yourAnswerInput2).setValue(registerPageD.answer2);
        const actual = $(registerPage.yourAnswerInput2).getValue();
        expect(actual).eq(registerPageE.answer2);
    });
});