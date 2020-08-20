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
// does not work check it!!!!!
    it('should verify the 24 products are presented on the page and add the last one to the cart', () => {
        const showProductsQuantity = $$('[aria-label="Display Number of Items"] option');
        const productQuantityExpected = showProductsQuantity[0].getAttribute('value');
        const shippingCheckbox = $('[title="Shipping Saver"]');
        shippingCheckbox.scrollIntoView();
        shippingCheckbox.click();
        const vitaminsCheckbox = $('#FilterVitamins101072');
        vitaminsCheckbox.scrollIntoView();
        vitaminsCheckbox.click();
        const productsAll = $$('.products.clearfix .product-cell-container .absolute-link-wrapper');
        productsAll[productsAll.length - 1].moveTo();
        const addToCartBtn = $('[data-ga-event-action="addToCart"]');
        browser.waitUntil(() => addToCartBtn.isDisplayed() === true, {
            timeout: 1000,
            timeoutMsg: 'No button is displayed',
        });
        addToCartBtn.click();
        numberOfProducts++;
        console.log(numberOfProducts, '/////////////////');
        browser.pause(3000);
        const msg = $('#add-to-cart-popup');
        expect(msg.isDisplayed()).true;
        expect(productsAll).to.have.lengthOf(+productQuantityExpected);
        expect(numberOfProducts).eq(3);
    });
});
