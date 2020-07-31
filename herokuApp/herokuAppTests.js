import { expect } from 'chai';

describe('Testing different elements', () => {
    before('open home page', () => {
        browser.url('https://the-internet.herokuapp.com/');
    });

    // it('should open `A/B Testing` page', () => {
    //     const links = $$('ul li a');
    //     for (let i = 0; i < links.length; i++) {
    //         if (links[i].getText() === 'A/B Testing') {
    //             links[i].click();
    //             break;
    //         }
    //     }
    //     const actualUrl = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     const expectedHeader = ['A/B Test Variation 1', 'A/B Test Control'];
    //     expect(actualUrl).eq('https://the-internet.herokuapp.com/abtest');
    //     expect(expectedHeader).to.include(actualHeader);
    // });
    //
    // it('should come back to home page', () => {
    //     browser.back();
    //     const actual = browser.getUrl();
    //     expect(actual).eq('https://the-internet.herokuapp.com/');
    // });
    //
    // it('should open `Add/Remove Elements` page', () => {
    //     $('[href="/add_remove_elements/"]').click();
    //     const actual = $('h3').getText();
    //     expect(actual).eq('Add/Remove Elements');
    // });
    //
    // it('should click `Add Element` button', () => {
    //     const btn = $('button');
    //     const selector = $('#elements button');
    //     expect(btn.isClickable()).true;
    //     expect(btn.isDisplayed()).true;
    //     expect(selector.isDisplayed()).false;
    //     btn.click();
    // });
    //
    // it('should verify the `Delete` button is showed up after `Add Element` button was clicked', () => {
    //     const selector = $('#elements button');
    //     expect(selector.isDisplayed()).true;
    //     expect(selector.isClickable()).true;
    // });
    //
    // it('should verify after click the `Delete` button only `Add Element` button stays', () => {
    //     const btn = $('button');
    //     const selector = $('#elements button');
    //     selector.click();
    //     expect(btn.isDisplayed()).true;
    //     expect(selector.isDisplayed()).false;
    //     browser.back();
    // });
    //
    // it('should verify the `Basic auth` page is open', () => {
    //     $('[href="/basic_auth"]').click();
    //     const actual = browser.getUrl();
    //     expect(actual).eq('https://the-internet.herokuapp.com/basic_auth');
    //     browser.back();
    // });
    //
    // it('should verify the `Broken image` page is open', () => {
    //     $('[href="/broken_images"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/broken_images');
    //     expect(actualHeader).eq('Broken Images');
    // });
    //
    // it('should verify the images are not broken', () => {
    //     const imgs = $$('.example>img');
    //     imgs.forEach(img => {
    //         expect(img.getAttribute('src')).to.have.lengthOf.above(0);
    //     });
    //     browser.back();
    // });

    it('should verify the `Challenging DOM` page is open', () => {
        $('[href="/challenging_dom"]').click();
        const actual = browser.getUrl();
        const actualHeader = $('h3').getText();
        expect(actual).eq('https://the-internet.herokuapp.com/challenging_dom');
        expect(actualHeader).eq('Challenging DOM');
    });

    it('should verify the specific elements (with ID) are present', () => {
        const selector1 = $$('.button')[0];
        const selector2 = $('.button.alert');
        const selector3 = $('.button.success');
        const canvas = $('#canvas');
        expect(selector1.isDisplayed()).true;
        expect(selector2.isDisplayed()).true;
        expect(selector2.isClickable()).true;
        expect(selector3.isDisplayed()).true;
        expect(canvas.isDisplayed()).true;
    });
});
