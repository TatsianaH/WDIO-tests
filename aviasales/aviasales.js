import { expect } from 'chai';

describe('Book a flight ticket_ Aviasales', () => {
    before('open home page Aviasales.com', () => {
        browser.setWindowSize(1400, 1024);
        browser.deleteAllCookies();
        browser.url('https://www.aviasales.com/');
        const from = $('#origin');
        from.clearValue();
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
        const value = 'Fort Lauderdale';
        from.setValue(value);
        while(from.getValue() !== 'Fort Lauderdale'){
            from.clearValue();
            from.setValue(value);
        }
        expect(from.getAttribute('value')).eq(value);
    });

    it('should fill `To` input field', () => {
        const to = $('#destination');
        const value = 'Las Vegas';
        to.setValue(value);
        while(to.getValue() !== 'Las Vegas'){
            to.clearValue();
            to.setValue(value);
        }
        expect(to.getAttribute('value')).eq(value);
    });

    it('should open trip duration dropdown menu', () => {
        const selector = $('.trip-duration__field.--departure');
        selector.click();
        browser.waitUntil(() => 
            $('.trip-duration__dropdown').isDisplayed() === true,
        { timeout: 3000, timeoutMsg: 'No date input displayed'});
    });

    it('should fill Departure date', () => {
        $('[aria-label="Sun Jul 26 2020"]').click();
        const actual = $('.trip-duration__input-wrapper.--departure input').getValue();
        expect(actual).eq('26.07.2020');
    });

    it('should fill Return date', () => {
        $('[aria-label="Sun Aug 02 2020"]').click();
        const actual = $('.trip-duration__input-wrapper.--return input').getValue();
        expect(actual).eq('2 august, sun');
    });

    it('should choose 3 adults and 1 child in passenger`s row', () => {
        $('.additional-fields.--avia').click();
        const passengerRow = $$('.additional-fields__passenger-row');
        const titles = $$('.additional-fields__passenger-title strong');
        const increments = $$('.additional-fields__passenger-control.--increment');
        const values = $$('span.additional-fields__passenger-value');
        for(let i = 0; i < passengerRow.length; i++){
            if(titles[i].getText() === 'Adults'){
                increments[i].click();
                increments[i].click();
                expect(values[i].getText()).eq('3');
            }
            if(titles[i].getText() === 'Children'){
                increments[i].click();
                expect(values[i].getText()).eq('1');
            }
        }
        const totalNumberOfPassengers = $('.additional-fields__label').getText();
        expect(totalNumberOfPassengers).eq('4 passengers');
    });

    it('should choose Business class', () => {
        const radioBtns = $$('.custom-radio__caption');
        radioBtns[1].click();
        expect($('#additional-fields-C').getProperty('checked')).true;
        expect($('#additional-fields-Y').getProperty('checked')).false;
    });
});