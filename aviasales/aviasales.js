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
        const to = $('#destination');
        const actual = to.isDisplayed();
        const actualPlaceholderText = to.getAttribute('placeholder');
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

    it('should fill `From` input field', () => {
        const from = $('#origin');
        const value = 'Fort ';
        from.clearValue();
        from.addValue(value);
        browser.keys('Tab');
        browser.waitUntil(() =>
            from.getValue() === 'Fort Lauderdale', {
            timeout: 1000, timeoutMsg: 'Wrong From city name'
        });
    });

    it('should fill `To` input field', () => {
        const to = $('#destination');
        const value = 'Las ';
        to.addValue(value);
        browser.keys('Tab');
        browser.waitUntil(() =>
            to.getValue() === 'Las Vegas', {
            timeout: 1000, timeoutMsg: 'Wrong To city name'
        });
    });

    it('should fill Departure date', () => {
        const selector = $('.trip-duration__input-wrapper.--departure');
        selector.click();
        browser.waitUntil(() => 
            $('.trip-duration__dropdown').isDisplayed() === true,
        { timeout: 3000, timeoutMsg: 'No date input displayed'});

        $('[aria-label="Sun Jul 26 2020"]').click();
        const actual = $('.trip-duration__input-wrapper.--departure input').getValue();
        expect(actual).eq('26.07.2020');
    });

    it('should fill Return date', () => {
        $('[aria-label="Sun Aug 02 2020"]').click();
        const actual = $('.trip-duration__input-wrapper.--return input').getValue();
        expect(actual).eq('2 august, sun');
    });
    //
    // it('should choose 2 adults, 1 child and business class', () => {
    //     $('.additional-fields.--avia').click();
    //     const titles = $$('.additional-fields__passenger-title');
    //     console.log(titles.length, '///////////////');
    //     titles.forEach((title, i) => {
    //         if(title.getText() === 'Adults'){
    //             $('.additional-fields__passenger-control.--increment')[i].click();
    //         }
    //         if(title.getText() === 'Children'){
    //             $('.additional-fields__passenger-control.--increment')[i].click();
    //         }
    //     });
    //     const radioBtns = $$('.custom-radio__caption');
    //     console.log(radioBtns.length, '=============');
    //     radioBtns[1].click();
    //     console.log($('#additional-fields-C').getProperty('checked'), '----------------------');
    //     expect($('#additional-fields-C').getProperty('checked')).true;
    //     browser.pause(5000);
    //     // + .additional-fields__passenger-control.--increment
    //     //.additional-fields__passenger-title
    //     //.custom-radio__caption
    // });
});