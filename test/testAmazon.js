import { expect } from 'chai';

describe('Fill out register form', () => {
    it('should redirect a user from main page to register page', () => {
        browser.url('https://www.amazon.com/');
        $('#nav-link-accountList').click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).includes('signin');
    });

    it('should check that the title of the Sign-In page is `Amazon Sign-In`', () => {
        const actualTitle = browser.getTitle();
        expect(actualTitle).includes('Amazon Sign-In');
    });

    it('should check that the button `Create your Amazon account` exists and clickable', () => {
        const btn = $('#createAccountSubmit');
        btn.isDisplayed();
        btn.isClickable();
    });


});