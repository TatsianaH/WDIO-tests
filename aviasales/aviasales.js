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
        $('[aria-label="Sat Aug 01 2020"]').click();
        const actual = $('.trip-duration__input-wrapper.--departure input').getValue();
        expect(actual).eq('01.08.2020');
    });

    it('should fill Return date', () => {
        $('[aria-label="Sun Aug 30 2020"]').click();
        const actual = $('.trip-duration__input-wrapper.--return input').getValue();
        expect(actual).eq('30 august, sun');
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

    it('should unchecked `Open Booking.com in a new window` checkbox', () => {
        $('.additional-fields.--avia').click();
        const selector = $('#clicktripz');
        $('[for="clicktripz"]').click();
        expect(selector.getProperty('checked')).false;
    });

    // it('should click `Search flights` button', () => {
    //     $('.--on-home').click();
    //     const selector = $('.error-informer h2');
    //     browser.waitUntil(() =>
    //         selector.isDisplayed() === true, {
    //         timeout: 8000,
    //         timeoutMsg: 'No errors displayed'
    //     });
    //     expect(selector.getText()).eq('No flights found');
    // });
    // .product-list__item.fade-enter-done

    it('should click `Search flights` button and open list with suggested flights', () => {
        $('.--on-home').click();
        $('.popular-filters__title').waitForDisplayed();
        const flightsList = $$('.product-list__item.fade-enter-done');
        expect(flightsList).to.have.lengthOf.to.be.greaterThan(0);
    });

    it('should click `Quickest` sorting', () => {
        const selector = $('ul.sorting__tabs li.sorting__tab:nth-child(2)');
        expect(selector.isClickable()).true;
        selector.click();
    });

    it('should verify the `Quickest` is selected', () => {
        const selector1 = $('ul.sorting__tabs li.sorting__tab.is-active:nth-child(1)');
        const selector2 = $('ul.sorting__tabs li.sorting__tab.is-active:nth-child(2)');
        expect(selector2.isDisplayed()).true;
        expect(selector1.isDisplayed()).false;
    });

    it('should check that all stops are selected', () => {
        const allStopsCheckBoxes = $$('.checkboxes-list__label span input');
        allStopsCheckBoxes.forEach(checkBox => {
            expect(checkBox.getProperty('checked')).true;
        });
    });

    it('should select only `1 stop` option', () => {
        const allStopsCheckBox = $('#stops_all');
        const stop1CheckBox = $('#stops_1');
        const stop2CheckBox = $('#stops_2');
        const allStopsCheckBoxes = $$('.checkboxes-list__label');
        allStopsCheckBoxes.forEach(checkBox => {
            if(checkBox.getText() === '2 stops') checkBox.click();
        });
        expect(allStopsCheckBox.getProperty('checked')).false;
        expect(stop1CheckBox.getProperty('checked')).true;
        expect(stop2CheckBox.getProperty('checked')).false;
    });

    it('should verify the origin departure city is FLL', () => {
        const departureCities = $$('.filter__route-origin');
        const destinationCities = $$('.filter__route-destination');
        departureCities.forEach((city, i) => {
            const value = destinationCities[i].getValue();
            if(city.getValue() === 'Fort Lauderdale') {
                expect(value).eq('Las Vegas');
            } else {
                expect(value).eq('Fort Lauderdale');
            }
        });
    });
});