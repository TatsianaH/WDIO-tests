import { expect } from 'chai';

describe('Fill out register form on Amazon.com', () => {
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
});