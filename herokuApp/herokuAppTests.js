import { expect } from 'chai';

describe('Testing different elements', () => {
    before('open home page', () => {
        browser.url('https://the-internet.herokuapp.com/');
    });

    it('should open `A/B Testing` page', () => {
        const links = $$('ul li a');
        for (let i = 0; i < links.length; i++) {
            if (links[i].getText() === 'A/B Testing') {
                links[i].click();
                break;
            }
        }
        const actualUrl = browser.getUrl();
        const actualHeader = $('h3').getText();
        const expectedHeader = ['A/B Test Variation 1', 'A/B Test Control'];
        expect(actualUrl).eq('https://the-internet.herokuapp.com/abtest');
        expect(expectedHeader).to.include(actualHeader);
    });

    it('should come back to home page', () => {
        browser.back();
        const actual = browser.getUrl();
        expect(actual).eq('https://the-internet.herokuapp.com/');
    });

    it('should open `Add/Remove Elements` page', () => {
        $('[href="/add_remove_elements/"]').click();
        const actual = $('h3').getText();
        expect(actual).eq('Add/Remove Elements');
    });
});
