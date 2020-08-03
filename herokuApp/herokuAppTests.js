import { expect } from 'chai';

describe('Testing different elements', () => {
    before('open home page', () => {
        browser.setWindowSize(1440, 900);
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

    // it('should verify the `Challenging DOM` page is open', () => {
    //     $('[href="/challenging_dom"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/challenging_dom');
    //     expect(actualHeader).eq('Challenging DOM');
    // });
    //
    // it('should verify the specific elements (with ID) are present', () => {
    //     const selector1 = $$('.button')[0];
    //     const selector2 = $('.button.alert');
    //     const selector3 = $('.button.success');
    //     const canvas = $('#canvas');
    //     expect(selector1.isDisplayed()).true;
    //     expect(selector2.isDisplayed()).true;
    //     expect(selector2.isClickable()).true;
    //     expect(selector3.isDisplayed()).true;
    //     expect(canvas.isDisplayed()).true;
    // });
    //
    // it('should verify the table consists of 10 rows', () => {
    //     const rows = $$('table tbody tr');
    //     expect(rows).to.have.lengthOf(10);
    // });
    //
    // it('should verify each row in the table contains its specific digit', () => {
    //     const elementsInRow = $$('table tbody tr td');
    //     for (let i = 0; i < elementsInRow.length; i++) {
    //         const value = elementsInRow[i].getText();
    //         if (i < 6) {
    //             expect(value).to.include('0');
    //         } else if (i > 6 && i <= 12) {
    //             expect(value).to.include('1');
    //         } else if (i > 13 && i <= 19) {
    //             expect(value).to.include('2');
    //         } else if (i > 20 && i <= 26) {
    //             expect(value).to.include('3');
    //         } else if (i > 27 && i <= 33) {
    //             expect(value).to.include('4');
    //         } else if (i > 34 && i <= 40) {
    //             expect(value).to.include('5');
    //         } else if (i > 41 && i <= 47) {
    //             expect(value).to.include('6');
    //         } else if (i > 48 && i <= 54) {
    //             expect(value).to.include('7');
    //         } else if (i > 55 && i <= 61) {
    //             expect(value).to.include('8');
    //         } else if (i > 62 && i <= 68) {
    //             expect(value).to.include('9');
    //         } else {
    //             expect(value).to.include('edit');
    //         }
    //     }
    //     browser.back();
    // });

    // it('should verify the `Checkboxes` page is open', () => {
    //     $('[href="/checkboxes"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/checkboxes');
    //     expect(actualHeader).eq('Checkboxes');
    // });
    //
    // it('should verify the `Checkbox2` is checked and `Checkbox1` is not checked', () => {
    //     const checkboxes = $$('input');
    //     expect(checkboxes[0].getProperty('checked')).false;
    //     expect(checkboxes[1].getProperty('checked')).true;
    // });
    //
    // it('should click the `Checkbox1` and verify the both checkboxes are checked', () => {
    //     const checkboxes = $$('input');
    //     checkboxes[0].click();
    //     expect(checkboxes[0].getProperty('checked')).true;
    //     expect(checkboxes[1].getProperty('checked')).true;
    //     browser.back();
    // });
    //
    // it('should verify the `Context Menu` page is open', () => {
    //     $('[href="/context_menu"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/context_menu');
    //     expect(actualHeader).eq('Context Menu');
    // });
    //
    // it('should invoke te context menu', () => {
    //     const selector = $('#hot-spot');
    //     selector.click({ button: 'right' });
    //     const actual = browser.getAlertText();
    //     expect(actual).eq('You selected a context menu');
    //     browser.acceptAlert();
    //     browser.back();
    // });

    // it('should verify the `Disappearing Elements` page is open', () => {
    //     $('[href="/disappearing_elements"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/disappearing_elements');
    //     expect(actualHeader).eq('Disappearing Elements');
    // });
    //
    // it('should verify the number of the links are presented on the `Disappearing Elements` page', () => {
    //     const links = $$('ul>li');
    //     const linksNumber = [4, 5];
    //     const getNumber = (links, linksNumber) => {
    //         return linksNumber.some(el => el === links.length);
    //     };
    //     expect(getNumber(links, linksNumber)).true;
    // });
    //
    // it('should redirect to Home page after click `Home` link on `Disappearing Elements` page', () => {
    //     const links = $$('ul>li');
    //     links[0].click();
    //     const actual = browser.getUrl();
    //     expect(actual).eq('https://the-internet.herokuapp.com/');
    // });
    //
    // it('should verify the number of the links are presented on the `Disappearing Elements` page after user goes to the page the second time', () => {
    //     $('[href="/disappearing_elements"]').click();
    //     const links = $$('ul>li');
    //     const linksNumber = [4, 5];
    //     const getNumber = (links, linksNumber) => {
    //         return linksNumber.some(el => el === links.length);
    //     };
    //     expect(getNumber(links, linksNumber)).true;
    //     browser.back();
    // });

    // it('should verify the `Disappearing Elements` page is open', () => {
    //     $('[href="/drag_and_drop"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/drag_and_drop');
    //     expect(actualHeader).eq('Drag and Drop');
    // });
    //
    // it('should verify the column1 has the header `A` and the column2 - `B`', () => {
    //     const column1 = $('#column-a header').getText();
    //     const column2 = $('#column-b header').getText();
    //     expect(column1).eq('A');
    //     expect(column2).eq('B');
    // });

    // does not work on the website
    it.skip('should verify after drag and drop column2 to column1 place the column1 has the header `B` and the column2 - `A`', () => {
        const column1 = $('#column-a');
        const column2 = $('#column-b');
        column2.dragAndDrop(column1);
        const column11 = $('#column-a header').getText();
        const column22 = $('#column-b header').getText();
        expect(column11).eq('B');
        expect(column22).eq('A');
        browser.back();
    });

    // it('should verify the `Dropdown List` page is open', () => {
    //     browser.url('https://the-internet.herokuapp.com/');
    //     $('[href="/dropdown"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/dropdown');
    //     expect(actualHeader).eq('Dropdown List');
    // });
    //
    // it('should verify the dropdown menu is present' , () => {
    //     const dropdownMenu = $('#dropdown');
    //     const actual = dropdownMenu.isDisplayed();
    //     expect(actual).true;
    // });
    //
    // it('should verify the selected by default dropdown menu option' , () => {
    //     const selector = $('[selected="selected"]');
    //     const actual = selector.getText();
    //     expect(actual).eq('Please select an option');
    // });
    //
    // it('should select `Option1` in dropdown menu', () => {
    //     const dropdownMenu = $('#dropdown');
    //     dropdownMenu.click();
    //     dropdownMenu.selectByIndex(1);
    //     const selector = $('[selected="selected"]');
    //     const actual = selector.getText();
    //     expect(actual).eq('Option 1');
    // });
    //
    // it('should select `Option2` in dropdown menu', () => {
    //     const dropdownMenu = $('#dropdown');
    //     dropdownMenu.click();
    //     dropdownMenu.selectByVisibleText('Option 2');
    //     const selector = $('[selected="selected"]');
    //     const actual = selector.getText();
    //     expect(actual).eq('Option 2');
    //     browser.back();
    // });

    it('should verify the `Dynamic controls` page is open', () => {
        $('[href="/dynamic_controls"]').click();
        const actual = browser.getUrl();
        const actualHeader = $$('h4')[0].getText();
        expect(actual).eq('https://the-internet.herokuapp.com/dynamic_controls');
        expect(actualHeader).eq('Dynamic Controls');
    });
    //
    // it('should verify the subheader `Remove/add`, checkbox and `Remove` button are present', () => {
    //     const subheader = $$('h4');
    //     const checkbox = $('#checkbox');
    //     const removeBtn = $$('button');
    //     const actualSubheader = subheader[1].isDisplayed();
    //     const actualCheckbox = checkbox.getText();
    //     const actualRemoveBtn = removeBtn[0].isClickable();
    //     expect(actualSubheader).true;
    //     expect(actualCheckbox).eq('A checkbox');
    //     expect(actualRemoveBtn).true;
    // });

    // it('should verify `Add` button will be displayed and checkbox will disappear after `Remove` button was clicked', () => {
    //     const button = $$('button');
    //     const checkbox = $('#checkbox');
    //     button[0].click();
    //     $('#message').waitForDisplayed();
    //     const actual = button[0].isDisplayed();
    //     const actualText = button[0].getText();
    //     const actualCheckbox = checkbox.isDisplayed();
    //     expect(actual).true;
    //     expect(actualText).eq('Add');
    //     expect(actualCheckbox).false;
    // });
    //
    // it('should verify `Remove` button and checkbox will be displayed after `Add` button was clicked', () => {
    //     const button = $$('button');
    //     const checkbox = $('#checkbox');
    //     button[0].click();
    //     browser.waitUntil(
    //         () => {
    //             return $('#message').getText() === 'It\'s back!';
    //         },
    //         { timeout: 2000, timeoutMsg: 'Wrong text' },
    //     );
    //     const actual = button[0].isDisplayed();
    //     const actualText = button[0].getText();
    //     const actualCheckbox = checkbox.isDisplayed();
    //     expect(actual).true;
    //     expect(actualText).eq('Remove');
    //     expect(actualCheckbox).true;
    // });

    it('should verify the input under `Enable/disable` subheader is disabled', () => {
        const input = $('#input-example input');
        const actual = input.getAttribute('disabled');
        expect(actual).eq('true');
    });

    it('should verify the input under `Enable/disable` subheader is enable after `Enable` button was clicked', () => {
        const button = $$('button');
        button[1].click();
        browser.waitUntil(
            () => {
                return $('#message').getText() === 'It\'s enabled!';
            },
            { timeout: 2000, timeoutMsg: 'Wrong text' },
        );
        const input = $('#input-example input');
        const actual = input.getAttribute('disabled');
        const actualBtn = button[1].getText();
        expect(actual).to.be.null;
        expect(actualBtn).eq('Disable');
    });

    it('should verify the input under `Enable/disable` subheader accepts a text', () => {
        const input = $('#input-example input');
        const value = 'Hello! I Love JS!';
        input.addValue(value);
        const actual = input.getValue();
        expect(actual).eq(value);
    });

    it('should verify the input under `Enable/disable` subheader is disable after `Disable` button was clicked', () => {
        const button = $$('button');
        button[1].click();
        browser.waitUntil(
            () => {
                return $('#message').getText() === 'It\'s disabled!';
            },
            { timeout: 2000, timeoutMsg: 'Wrong text' },
        );
        const input = $('#input-example input');
        const actual = input.getAttribute('disabled');
        const actualBtn = button[1].getText();
        expect(actual).eq('true');
        expect(actualBtn).eq('Enable');
        browser.back();
    });


});
