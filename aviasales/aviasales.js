import { expect } from 'chai';

describe('Book a flight ticket_ Aviasales', () => {
    before('open home page usps', () => {
        browser.setWindowSize(1400, 1024);
        browser.deleteAllCookies();
        browser.url('https://www.aviasales.com/');
    });

    it('should verify the Logo is present', () => {
        const actual = $('.navbar__logo-wrap').isDisplayed();
        expect(actual).true;
    });

    it('should verify the header`s text is `Search for cheap airline tickets`', () => {
        const actual = $('h1').getText();
        expect(actual).eq('Search for cheap airline tickets');
    });

    it('verify the USD is selected value', () => {
        const actual = $('.locale-selector__label-text.--currency').getText();
        console.log(actual, '-------');
        expect(actual).eq('USD');
    });
});