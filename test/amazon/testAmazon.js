import { expect } from 'chai';

describe('Fill out register form on Amazon.com (Positive)', () => {
    it('should redirect a user from main page to Sign-in page', () => {
        browser.url('https://www.amazon.com/');
        $('#nav-link-accountList').click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).includes('signin');
    });

    it('should verify the title of the Sign-In page', () => {
        const actualTitle = browser.getTitle();
        expect(actualTitle).eq('Amazon Sign-In');
    });

    it('should check that the button `Create your Amazon account` exists and clickable', () => {
        const btn = $('#createAccountSubmit');
        expect(btn.isDisplayed()).true;
        expect(btn.isClickable()).true;
    });

    it('should redirect user to registration page after the button `Create your Amazon account` on the Sign-In page is clicked', () => {
        $('#createAccountSubmit').click();
        const actualTitle = browser.getTitle();
        expect(actualTitle).eq('Amazon Registration');
    });

    it('should verify that the icon-logo element is present on the register page and clickable', () => {
        const iconLogo = $('.a-icon.a-icon-logo');
        expect(iconLogo.isDisplayed()).true;
        expect(iconLogo.isClickable()).true;
    });

    it('should verify that the icon-logo element redirects to main page after is clicked', () => {
        $('.a-icon.a-icon-logo').click();
        expect(browser.getUrl()).eq('https://www.amazon.com/ref=ap_frn_logo');
        browser.back();
    });

    it('should verify that the header on the register page is `Create account`', () => {
        expect($('h1').getText()).eq('Create account');
    });

    // register page
    it('should verify that the `Your name` label is present on the register page', () => {
        expect($('label[for="ap_customer_name"]').isDisplayed()).true;
    });

    it('should verify that the `Email` label is present on the register page', () => {
        expect($('label[for="ap_email"]').isDisplayed()).true;
    });

    it('should verify that the `Password` label is present on the register page', () => {
        expect($('label[for="ap_password"]').isDisplayed()).true;
    });

    it('should verify that the `Re-enter password` label is present on the register page', () => {
        expect($('label[for="ap_password_check"]').isDisplayed()).true;
    });

    it('should verify that the `Create your Amazon account` button is displayed and enabled', () => {
        const btn = $('#continue');
        expect(btn.isDisplayed()).true;
        expect(btn.isEnabled()).true;
    });

    it('should verify that the input `Name` is displayed and has maxlength 50', () => {
        const input = $('#ap_customer_name');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('50');
        expect(input.isDisplayed()).true;
    });

    it('should fill input `Name`', () => {
        const input = $('#ap_customer_name');
        input.setValue('Joe');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('50');
        expect(input.getValue()).eq('Joe');
    });

    it('should verify that the input `Email` is displayed and has maxlength 64', () => {
        const input = $('#ap_email');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('64');
        expect(input.isDisplayed()).true;
    });

    it('should fill input `Email`', () => {
        const input = $('#ap_email');
        input.setValue('joe@joe.joe');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('64');
        expect(input.getValue()).eq('joe@joe.joe');
    });

    it('should verify that the input `Password` is displayed and has maxlength 1024', () => {
        const input = $('#ap_password');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('1024');
        expect(input.isDisplayed()).true;
    });

    it('should fill input `Password`', () => {
        const input = $('#ap_password');
        input.setValue('111111');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('1024');
        expect(input.getValue()).eq('111111');
    });

    it('should verify that the input `Re-enter password` is displayed and has maxlength 1024', () => {
        const input = $('#ap_password_check');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('1024');
        expect(input.isDisplayed()).true;
    });

    it('should fill input `Re-enter password`', () => {
        const input = $('#ap_password_check');
        input.setValue('111111');
        const maxLengthActual = input.getAttribute( 'maxlength');
        expect(maxLengthActual).eq('1024');
        expect(input.getValue()).eq('111111');
    });

    it('should verify that no alerts present on the register page', () => {
        expect($('.a-alert-content').isDisplayed()).false;
    });

    it('should verify that the `Conditions of Use` link redirects to proper page', () => {
        const links = $$('#legalTextRow a');
        links[0].click();
        const actualTitle = browser.getTitle();
        expect(actualTitle).eq('Amazon.com Help: Conditions of Use');
        browser.back();
    });

    it('should verify that the `Privacy Notice` link redirects to proper page', () => {
        const links = $$('#legalTextRow a');
        links[1].click();
        const actualTitle = browser.getTitle();
        expect(actualTitle).eq('Amazon.com Help: Amazon.com Privacy Notice');
        browser.back();
    });
});

describe('Work list menu on Amazon', () => {
    before('', () => {
        browser.setWindowSize(1400, 1440);
        browser.url('https://www.amazon.com/')  ;
    });

    it('should open `Your Garage` page', () => {
        $('#nav-link-accountList').moveTo();
        const links = $$('.nav-link.nav-item');
        for(let i = 0; i < links.length; i++){
            if(links[i].getText().includes('Garage')){
                links[i].click();
                break;
            }
        }
        expect(browser.getTitle()).eq('Your Garage: Automotive: Amazon.com');
    });
});

describe('Get access to Amazon Prime from main page', () => {
    before('', () => {
        browser.setWindowSize(1400, 1440);
        browser.url('https://www.amazon.com/');
    });

    it('verify that user gets redirected to Amazom Prime page', () => {
        $('#nav-link-prime').moveTo();
        $('.prime-button-try').click();
        expect(browser.getTitle()).eq('Amazon.com: Amazon Prime');
    });

    it('verify that user gets redirected to Sign-In page', () => {
        const btn = $('#prime-hero-cta #prime-header-CTA');
        browser.waitUntil(
            () => btn.isClickable() === true,
            {
                timeout: 3000,
                timeoutMsg: 'the button is not clickable after 3s'
            });

        btn.click();
        browser.waitUntil(
            () => $('h1').getText() === ('Sign-In'),
            {
                timeout: 2000,
                timeoutMsg: 'expected text to be different after 2s'
            });
    });
});