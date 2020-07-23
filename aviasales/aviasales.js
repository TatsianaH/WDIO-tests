import { expect } from 'chai';

describe('Book a flight ticket_ Aviasales', () => {
    before('open home page Aviasales.com', () => {
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

    it('should verify the USD is selected value', () => {
        const actual = $('.locale-selector__label-text.--currency').getText();
        expect(actual).eq('USD');
    });

    it('should verify `FROM` input field is present and had placeholder `From`', () => {
        const from = $('#origin');
        const actual = from.isDisplayed();
        const actualPlaceholderText = from.getAttribute('placeholder');
        expect(actual).true;
        expect(actualPlaceholderText).eq('From');
    });

    it('should verify `To` input field is present and had placeholder `To`', () => {
        const from = $('#destination');
        const actual = from.isDisplayed();
        const actualPlaceholderText = from.getAttribute('placeholder');
        expect(actual).true;
        expect(actualPlaceholderText).eq('To');
    });

    it('should verify `Depart` and `Return` input fields are present and have correct placeholders', () => {
        const dates = $$('.trip-duration__date-input');
        const departInputField = dates[0].getAttribute('placeholder');
        const returnInputField = dates[1].getAttribute('placeholder');
        expect(departInputField).eq('Depart');
        expect(returnInputField).eq('Return');
    });
});