import { expect } from 'chai';

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
});