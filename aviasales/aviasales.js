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
        //browser.pause(500);
        from.addValue(value);
        browser.keys('Tab');
        //browser.pause(500);
        //$('.autocomplete__dropdown').selectByIndex(0);
        //const actual = from.getValue();
        //browser.keys('Tab');
        console.log( from.getValue(), '////////////');
        browser.waitUntil(() =>
            from.getValue() === 'Fort Lauderdale', {
            timeout: 1000, timeoutMsg: 'Wrong city name'
        });
        //expect(actual).eq('Fort Lauderdale');
    });

    it('should fill `To` input field', () => {
        const to = $('#destination');
        const value = 'Las ';
        to.addValue(value);
        browser.keys('Tab');
        //browser.pause(500);
        //$('.autocomplete__dropdown').selectByIndex(0);
        //const actual = to.getValue();
        browser.waitUntil(() =>
            to.getValue() === 'Las Vegas', {
            timeout: 1000, timeoutMsg: 'Wrong city name'
        });
        //browser.keys('Tab');
        //expect(actual).eq('Las Vegas');
    });

    it('should fill Departure date', () => {
        const selector = $('.trip-duration__input-wrapper.--departure');
        selector.click();
        browser.waitUntil(() => 
            $('.trip-duration__dropdown').isDisplayed() === true,
        { timeout: 3000, timeoutMsg: 'No date input displayed'});
     
        //const selector = $('[placeholder="Depart"]');
        //selector.click();
        //$('.calendar-day.--selected.--bounded div.calendar-day__date').moveTo().click();
        $('[aria-label="Sun Jul 26 2020"]').click();
        expect($('.trip-duration__input-wrapper.--departure input ').getValue()).eq('26.07.2020');
        //browser.pause(1000);
        //$('.trip-duration__input-wrapper.--departure input').addValue('Sun Jul 26 2020');
        //browser.keys('Tab');
        //$('[aria-label="Sun Jul 26 2020"]').click();
        // selector.setValue('25 july, sa');
        // const selector = $('[placeholder="Depart"]');
        // selector.click();
        // const value1 = $('[value="25.07.2020"]');
        // value1.click();

    });

    it('should fill Return date', () => {
        $('[aria-label="Sun Aug 02 2020"]').click();
        expect($('.trip-duration__input-wrapper.--return input ').getValue()).eq('2 august, sun');
        //const sel = $('[placeholder="Return"]');
        //$('[aria-label="Mon Aug 03 2020"]').click();
        //$('[placeholder="Return"]').setValue('2 august, sun');
        // const value2 = $('[value="02.08.2020"]');
        // value2.click();
        // $('.trip-duration__input-wrapper.--return input').addValue('Mon Aug 03 2020');
        //browser.keys('Tab');
        browser.pause(5000);
    });

    // it('should choose 2 adults and economy class', () => {
    //     $('.additional-fields.--avia').click();
    // });
});