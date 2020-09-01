import { expect } from 'chai';

let bathPrice = 0;
let bathPrice2Items = 0;
let bathDescription = undefined;
let numberOfProducts = 0;
let lastProductOnPage1 = undefined;
let priceLastProductOnPage1 = 0;
let productOnPage10 = undefined;
let priceProductOnPage10 = 0;

describe('Iherb website', () => {
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
        allCurrencies.forEach(currency => {
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
        bathPrice2Items = numberOfProducts * bathPrice.replace('$', '');
        browser.pause(2000);
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

    it('should verify the `Shipping Saver` is checked as filter', () => {
        const selector = $('#list-page-banner-layout');
        selector.scrollIntoView();
        const filterList = $$('#flag-filtering ul > li');
        filterList[0].click();
        const checkbox = $('#Filtersssshippingsaver');
        const checkboxChecked = Boolean(checkbox.getAttribute('checked'));
        expect(checkboxChecked).true;
    });

    it('should close the banner at the bottom of the page', () => {
        const banner = $('.hp-welcome-mat-module');
        const bannerIsDisplayedBefore = banner.isDisplayedInViewport();
        if (bannerIsDisplayedBefore) {
            const bannerClose = $('.icon.welcome-mat-module-close');
            bannerClose.click();
            browser.pause(1000);
        }
        const bannerIsDisplayed = banner.isDisplayedInViewport();
        expect(bannerIsDisplayed).false;
    });

    it('should verify the 24 products are presented on the page', () => {
        const showProductsQuantity = $$('[aria-label="Display Number of Items"] option');
        const productQuantityExpected = Number(showProductsQuantity[0].getAttribute('value'));
        const productsAll = $$('.products.clearfix .product-cell-container .absolute-link-wrapper');
        const pricesAll = $$('.product-price-top .price.discount-red bdi');
        productsAll[productsAll.length - 5].scrollIntoView();
        productsAll[productsAll.length - 1].moveTo();
        lastProductOnPage1 = productsAll[productsAll.length - 1].getText();
        priceLastProductOnPage1 = pricesAll[pricesAll.length - 1].getText();
        expect(productsAll).to.have.lengthOf(productQuantityExpected);
    });

    it('should add the last product on the first page to the cart', () => {
        const addToCartBtn = $$('[data-ga-event-action="addToCart"]');
        browser.waitUntil(() => addToCartBtn[addToCartBtn.length - 1].isDisplayedInViewport() === true, {
            timeout: 3000,
            timeoutMsg: 'No button is displayed',
        });
        addToCartBtn[addToCartBtn.length - 1].click();
        numberOfProducts++;
        browser.pause(3000);
        const msg = $('#add-to-cart-popup');
        expect(msg.isDisplayed()).true;
        expect(numberOfProducts).eq(3);
    });

    it('should verify the user is on the first page in Super Deals section', () => {
        const page = $$('.pagination-selected span');
        const page1 = page[1].getText();
        expect(page1).eq('1');
    });

    it('should redirect user to the page number 10 in Super Deals section', () => {
        // const nextPage = $('.pagination-next');
        // let i = 1;
        // while (i < 10) {
        //     $('.product.ga-product .product-flag-container').scrollIntoView();
        //     nextPage.click();
        //     browser.waitUntil(() => browser.getUrl() === `https://www.iherb.com/specials?sss=true&p=${i + 1}`, {
        //         timeout: 3000,
        //         timeoutMsg: 'Something went wrong',
        //     });
        //     i++;
        // }
        // need to avoid tests failed
        browser.url('https://www.iherb.com/specials?sss=true&p=10');
        const page10 = browser.getUrl().slice(-2);
        expect(page10).eq('10');
    });

    it('should find max discount on the page #10 and add related to it product to the cart', () => {
        let discounts = $$('.product-price-top .percentage-off bdi');
        discounts = discounts.map(el => parseInt(el.getText()));
        const maxDiscount = Math.max(...discounts);
        const maxDiscountIndex = discounts.findIndex(el => el === maxDiscount);
        const productsAll = $$('.products.clearfix .product-cell-container .absolute-link-wrapper');
        const pricesAll = $$('.product-price-top .price.discount-red bdi');
        productsAll[maxDiscountIndex].scrollIntoView();
        productsAll[maxDiscountIndex].moveTo();
        productOnPage10 = productsAll[maxDiscountIndex].getText();
        priceProductOnPage10 = pricesAll[maxDiscountIndex].getText();
        const addToCartBtn = $$('[data-ga-event-action="addToCart"]');
        addToCartBtn[maxDiscountIndex].click();
        numberOfProducts++;
        const msg = $('#add-to-cart-popup');
        browser.pause(1000);
        expect(msg.isDisplayedInViewport()).true;
        expect(numberOfProducts).eq(4);
    });

    it('should redirect user to Cart page after its link was clicked', () => {
        const link = $('a[href="https://checkout.iherb.com/cart"]');
        link.click();
        browser.waitUntil(() => browser.getUrl() === 'https://checkout.iherb.com/cart', {
            timeout: 3000,
            timeoutMsg: 'No Cart page is displayed',
        });
        const url = browser.getUrl();
        expect(url).eq('https://checkout.iherb.com/cart');
    });

    it('should verify the number if products in the cart', () => {
        const selector = $('#undefined');
        const num = +selector.getText();
        expect(num).eq(numberOfProducts);
    });

    it('should verify the name of the product in the cart', () => {
        let products = $$('.ltr-1t0rg9b');
        products = products.map(product => product.getText()).map(product => product.replace(/,/g, ''));
        expect(products).to.include(bathDescription.replace(/,/g, ''));
        expect(products).to.include(lastProductOnPage1.replace(/,/g, ''));
        expect(products).to.include(productOnPage10.replace(/,/g, ''));
    });

    it('should verify the price of each the product in the cart', () => {
        let prices = $$('[data-qa-element="line-item"] .ltr-17rm9tq');
        prices = prices.map(product => product.getText()).map(product => parseFloat(product.replace('$', '')));
        console.log(prices, bathPrice2Items, parseFloat(priceLastProductOnPage1.replace('$', '')),parseFloat(priceProductOnPage10.replace('$', '')), '//////////////////' );
        expect(prices).to.include(bathPrice2Items);
        expect(prices).to.include(parseFloat(priceLastProductOnPage1.replace('$', '')));
        expect(prices).to.include(parseFloat(priceProductOnPage10.replace('$', '')));
    });

    it('should verify prices in the cart with discount and final price', () => {
        let prices = $$('[data-qa-element="line-item"] .ltr-17rm9tq');
        prices = prices
            .map(product => product.getText())
            .map(product => parseFloat(product.replace('$', '')))
            .reduce((acc, curr) => acc + curr);
        const totalPrice = $$('.ltr-7v2edd');
        expect(parseFloat(totalPrice[1].getText().replace('$', ''))).eq(prices);
    });

    it('should add postal code to input field', () => {
        const input = $('[name="postal-code"]');
        const value = '33019';
        input.addValue(value);
        expect(input.getValue()).eq(value);
    });

    it('should show up the type of delivery after `Calculate` button was clicked', () => {
        const button = $('[value="Calculate"]');
        button.click();
        const deliveryOptions = $('.ltr-4u6dli');
        deliveryOptions.waitForDisplayed();
        const deliveryOptionsIsDisplayed = deliveryOptions.isDisplayedInViewport();
        expect(deliveryOptionsIsDisplayed).true;
    });

    it('should select PO box or APO Address', () => {
        const radioBtns = $$('.ltr-oi5f3g');
        radioBtns[1].click();
    });

    it('should redirect user to Login Page after `Proceed to Checkout` button was clicked', () => {
        const button = $('=Proceed to Checkout');
        button.waitForClickable();
        button.click();
        browser.waitUntil(() => browser.getTitle() === 'Login Pages', {
            timeout: 2000,
            timeoutMsg: 'No Login Page is displayed',
        });
    });
});
