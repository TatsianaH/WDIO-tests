import { expect } from 'chai';

let bathPrice = 0;
let bathDescription = '';

describe('Add some Best Sellers to Cart', () => {
    before(() => {
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
        const items = $$('#section-Bath-Personal-Care .description .product-title');
        const prices = $$('#section-Bath-Personal-Care .price');
        bathDescription = items[1].getText();
        bathPrice = prices[1].getText();
        expect(items).to.have.lengthOf(10);
        expect(prices).to.have.lengthOf(10);
        items[1].click();
    });

    it('should verify the user gets redirected to selected product page', () => {
        const urlActual = browser.getUrl();
        const linkPartialExpected = bathDescription.split(' ')[0];
        expect(urlActual).to.include(linkPartialExpected);
    });
});
