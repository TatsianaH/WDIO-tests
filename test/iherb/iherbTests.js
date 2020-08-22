import { expect } from 'chai';

let bathPrice = 0;
let bathDescription = '';
let numberOfProducts = 0;

describe('Add some Best Sellers to Cart', () => {
    before(() => {
        browser.deleteAllCookies();
        browser.setWindowSize(1400, 900);
        browser.url('https://www.iherb.com/');
    });

    it('should verify the correct url is open', () => {
        const actual = browser.getUrl();
        expect(actual).eq('https://www.iherb.com/');
    });

    it('should verify the `countryLangCurrency` window is open', () => {
        const countryLangCurrency = $('.selected-country-wrapper');
        countryLangCurrency.click();
        const countryLangCurrencyOptions = $('.selection-list-wrapper');
        expect(countryLangCurrencyOptions.isDisplayedInViewport()).true;
    });

    it('should check the United States as Your Shipping Destination', () => {
        const country = $('.search-input');
        country.click();
        const allCountries = $$('.menu.search-list.open .item.popular');
        allCountries.forEach(country => {
            if (country.getAttribute('data-val') === 'US') country.click();
        });
        const countrySelected = $('.select-country .dropdown-text.text label');
        expect(countrySelected.getText()).eq('United States');
    });

    it('should check English as Your Language', () => {
        const language = $('.select-language');
        language.click();
        const allLanguages = $$('.select-language .item');
        allLanguages.forEach(language => {
            if (language.getAttribute('data-val') === 'en-US') language.click();
        });
        const languageSelected = $('.select-language .dropdown-text.text label');
        expect(languageSelected.getText()).eq('English');
    });

    it('should check USD as Your Currency', () => {
        const currency = $('.select-currency ');
        currency.click();
        const allCurrencies = $$('.select-currency .item');
        allCurrencies .forEach(currency => {
            if (currency.getAttribute('data-val') === 'USD') currency.click();
        });
        const currencySelected = $('.select-currency .dropdown-text.text bdi label');
        expect(currencySelected.getText()).eq('USD ($)');
    });

    it('should save preferences and close the `countryLangCurrency` window', () => {
        const btn = $('button=Save Preferences');
        btn.click();
        browser.pause(1500);
        const countryLangCurrencyOptions = $('.selection-list-wrapper');
        expect(countryLangCurrencyOptions.isDisplayedInViewport()).false;
    });

    it('should verify the `Best Sellers` page is open', () => {
        const link = $('=Best Sellers');
        link.click();
        const header = $('h1');
        const actual = header.getText();
        expect(actual).eq('Best Sellers');
    });

    it('should verify the `United States` region is presented', () => {
        const region = $('.country-filter');
        const actual = region.getValue();
        const isDisplayed = region.isDisplayed();
        expect(actual).eq('United States');
        expect(isDisplayed).true;
    });

    it('should choose the second product from `Bath & Personal Care` department', () => {
        const link = $('*=Bath');
        link.click();
        const items = $$('#section-Bath-Personal-Care .description');
        const itemsTitle = $$('#section-Bath-Personal-Care .description .product-title');
        const prices = $$('#section-Bath-Personal-Care .price');
        bathDescription = itemsTitle[1].getText();
        bathPrice = prices[1].getText();
        expect(items).to.have.lengthOf(10);
        expect(prices).to.have.lengthOf(10);
        items[1].click();

        const urlTopSellers = 'https://www.iherb.com/catalog/topsellers';
        const urlNew = browser.getUrl();
        browser.waitUntil(() => urlNew !== urlTopSellers, { timeout: 3000, timeoutMsg: 'No new page is displayed' });
    });

    it('should verify the user gets redirected to selected product page', () => {
        const urlActual = browser.getUrl();
        const linkPartialExpected = bathDescription.split(' ')[0].replace(/[^a-z]/gi, '');
        expect(urlActual).to.include(linkPartialExpected);
    });

    it('should verify the name and the price of the product are equal to information on the Best Sellers page', () => {
        const header = $('.hidden-xs #product-summary-header h1');
        const headerActual = header.getText();
        const price = $('#price');
        const priceActual = price.getText();
        expect(headerActual).eq(bathDescription);
        expect(priceActual).eq(bathPrice);
    });

    it('should add 2 products (from the Bath department) to the cart', () => {
        const quantity = $('#volume-quantity');
        const btn = $('button[name="AddToCart"]');
        const quantityValue = $$('#volume-quantity option');
        numberOfProducts += Number(quantityValue[1].getAttribute('value'));
        quantity.selectByIndex(1);
        btn.click();
        browser.pause(3000);
        const msg = $('#add-to-cart-popup');
        expect(msg.isDisplayed()).true;
        expect(numberOfProducts).eq(2);
    });

    it('should verify a user gets redirected to `Super Deals` page after proper link was clicked', () => {
        const link = $('=Super Deals');
        link.click();
        browser.waitUntil(() => browser.getUrl() === 'https://www.iherb.com/specials', {
            timeout: 3000,
            timeoutMsg: 'No correct page is displayed',
        });
    });

    it('should verify the `Shipping Saver` is checked', () => {
        // browser.setWindowSize(1400, 900);
        // browser.url('https://www.iherb.com/specials');
        const selector = $('#list-page-banner-layout');
        selector.scrollIntoView();
        const filterList = $$('#flag-filtering ul > li');
        filterList[0].click();
        browser.pause(500);
        filterList[1].click();
        const checkbox = $('#Filtersssshippingsaver');
        const checkboxChecked = Boolean(checkbox.getAttribute('checked'));
        const checkbox2 = $('#Filtersititested');
        const checkboxChecked2 = Boolean(checkbox2.getAttribute('checked'));
        expect(checkboxChecked).true;
        expect(checkboxChecked2).true;
    });
    //
    // // does not work check it!!!!!
    // // it('should verify the 24 products are presented on the page and add the last one to the cart', () => {
    // //     const showProductsQuantity = $$('[aria-label="Display Number of Items"] option');
    // //     const productQuantityExpected = showProductsQuantity[0].getAttribute('value');
    // //     const shippingCheckbox = $('#Filtersssshippingsaver');
    // //
    // //     shippingCheckbox.scrollIntoView();
    // //     shippingCheckbox.click();
    // //
    // //     const vitaminsCheckbox = $('#FilterVitamins101072');
    // //     vitaminsCheckbox.scrollIntoView();
    // //     // vitaminsCheckbox.click();
    // //     const productsAll = $$('.products.clearfix .product-cell-container .absolute-link-wrapper');
    // //     productsAll[productsAll.length - 1].moveTo();
    // //     const addToCartBtn = $('[data-ga-event-action="addToCart"]');
    // //     browser.waitUntil(() => addToCartBtn.isDisplayed() === true, {
    // //         timeout: 1000,
    // //         timeoutMsg: 'No button is displayed',
    // //     });
    // //     addToCartBtn.click();
    // //     numberOfProducts++;
    // //     console.log(numberOfProducts, '/////////////////');
    // //     browser.pause(3000);
    // //     const msg = $('#add-to-cart-popup');
    // //     expect(msg.isDisplayed()).true;
    // //     expect(productsAll).to.have.lengthOf(+productQuantityExpected);
    // //     expect(numberOfProducts).eq(3);
    // // });
});
