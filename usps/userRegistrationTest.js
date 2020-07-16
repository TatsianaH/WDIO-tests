import { expect } from 'chai';
import { homePageD, registerPageD } from './data/data.json';
import { homePage, signInPage, registerPage } from './data/selectors.json';
import { registerPageE, signInPageD } from './data/expected.json';

describe('User Registration', () => {
    before('open home page usps', () => {
        browser.deleteAllCookies();
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
        if($(registerPage.userNameErrorMsg).isDisplayed()){
            $(registerPage.userNameSuggestedRadioBtn).click();
            const actual = $(registerPage.userNameSuggestedRadioBtn).isSelected();
            const actualAvailableMsg = $(registerPage.availableMsg).isDisplayed();
            expect(actualAvailableMsg).true;
            expect(actual).true;
        } else {
            const actual = $(registerPage.userNameInput).getValue();
            expect(actual).eq(registerPageE.userName);   
        }
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
        browser.keys('tab');
        expect(actual).eq(registerPageE.answer1);
    });

    it('should fill `Re-Type your answer` (First Question)', () => {
        $(registerPage.reTypeYourAnswerInput).setValue(registerPageD.answer1);
        const actual = $(registerPage.reTypeYourAnswerInput).getValue();
        browser.keys('tab');
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
        $(registerPage.reTypeYourAnswerInput2).setValue(registerPageD.answer2);
        const actual = $(registerPage.reTypeYourAnswerInput2).getValue();
        browser.keys('tab');
        expect(actual).eq(registerPageE.answer2);
    });

    it('should show up Steps 4, 5 and `Verify address` button is displayed after `Personal account` radio button was checked', () => {
        $(registerPage.personalAccountRadioBtn).click();
        const stepsList = $$(registerPage.steps);
        let stepsLength = 0;
        stepsList.forEach(step => {
            if(step.getText().includes('Step')) stepsLength++;
        });
        const actualBtn = $(registerPage.verifyAddressBtn).isDisplayed();
        const actualRadioBtn = $(registerPage.personalAccountRadioBtn).isSelected();
        expect(stepsLength).eq(5);
        expect(actualBtn).true;
        expect(actualRadioBtn).true;
    });
    
    it('should select `Mr` title', () => {
        $(registerPage.titleSelectForm).selectByIndex(1);
        browser.keys('Tab');
        const actual = $(registerPage.titleSelectedOption).isSelected();
        expect(actual).true;
    });

    it('should fill `First Name` field', () => {
        $(registerPage.firstName).setValue(registerPageD.firstName);
        const actual =  $(registerPage.firstName).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.firstName);
    });

    it('should fill `M.I.` field', () => {
        $(registerPage.middleInitial).setValue(registerPageD['M.I.']);
        const actual =  $(registerPage.middleInitial).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE['M.I.']);
    });

    it('should fill `Last Name` field', () => {
        $(registerPage.lastName).setValue(registerPageD.lastName);
        const actual =  $(registerPage.lastName).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.lastName);
    });

    it('should check `Js` suffix', () => {
        $(registerPage.suffixSelectForm).selectByIndex(1);
        browser.keys('Tab');
        const actual = $(registerPage.suffixSelectedOption).isSelected();
        expect(actual).true;
    });

    it('should fill `Email Address` field', () => {
        $(registerPage.email).setValue(registerPageD.email);
        const actual =  $(registerPage.email).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.email);
    });

    it('should fill `Re-Type Email Address` field', () => {
        $(registerPage.reTypeEmail).setValue(registerPageD.email);
        const actual =  $(registerPage.reTypeEmail).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.email);
    });

    it('should check `US` type', () => {
        $(registerPage.phoneType).selectByIndex(0);
        browser.keys('Tab');
        const actual = $(registerPage.phoneTypeSelected).isSelected();
        expect(actual).true;
    });

    it('should fill `Phone` field', () => {
        $(registerPage.phone).setValue(registerPageD.phone);
        const actual =  $(registerPage.phone).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.phone);
    });

    it('should fill `Ext` field', () => {
        $(registerPage.ext).setValue(registerPageD.ext);
        const actual =  $(registerPage.ext).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.ext);
    });

    it('should check `From USPS` checkbox', () => {
        $(registerPage.contactUSPS).click();
        const actual = $(registerPage.contactUSPS).isSelected();
        expect(actual).true;
    });

    it('should select `USA` in `Country` select form', () => {
        $(registerPage.country).click();
        $(registerPage.country).selectByVisibleText(registerPageD.country);
        const actual = $(registerPage.countrySelectedOption).isSelected();
        browser.keys('Tab');
        expect(actual).true;
    });

    it('should fill `Street Address` field', () => {
        $(registerPage.street).setValue(registerPageD.street);
        const actual =  $(registerPage.street).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.street);
    });

    it('should fill `Apt/Suite/Other` field', () => {
        $(registerPage.apt).setValue(registerPageD.apt);
        const actual =  $(registerPage.apt).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.apt);
    });

    it('should fill `City` field', () => {
        $(registerPage.city).setValue(registerPageD.city);
        const actual =  $(registerPage.city).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.city);
    });

    it('should select `FL` in `State` select form', () => {
        $(registerPage.state).click();
        $(registerPage.state).selectByVisibleText(registerPageD.state);
        const actual = $(registerPage.stateSelectedOption).isSelected();
        browser.keys('Tab');
        expect(actual).true;
    });

    it('should fill `zipCode` field', () => {
        $(registerPage.zipCode).setValue(registerPageD.zipcode);
        const actual =  $(registerPage.zipCode).getValue();
        browser.keys('Tab');
        expect(actual).eq(registerPageE.zipcode);
    });

    it('should verify the `Verify address` button is clickable', () => {
        const actual= $(registerPage.verifyAddressBtn).isClickable();
        expect(actual).true;
    });
});