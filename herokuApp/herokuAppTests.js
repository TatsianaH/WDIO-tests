import { expect } from 'chai';

describe('Testing different elements', () => {
    before('open home page', () => {
        browser.setWindowSize(1400, 900);
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

    // it('should verify the `Dynamic controls` page is open', () => {
    //     $('[href="/dynamic_controls"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $$('h4')[0].getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/dynamic_controls');
    //     expect(actualHeader).eq('Dynamic Controls');
    // });
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

    // it('should verify the input under `Enable/disable` subheader is disabled', () => {
    //     const input = $('#input-example input');
    //     const actual = input.getAttribute('disabled');
    //     expect(actual).eq('true');
    // });
    //
    // it('should verify the input under `Enable/disable` subheader is enable after `Enable` button was clicked', () => {
    //     const button = $$('button');
    //     button[1].click();
    //     browser.waitUntil(
    //         () => {
    //             return $('#message').getText() === 'It\'s enabled!';
    //         },
    //         { timeout: 2000, timeoutMsg: 'Wrong text' },
    //     );
    //     const input = $('#input-example input');
    //     const actual = input.getAttribute('disabled');
    //     const actualBtn = button[1].getText();
    //     expect(actual).to.be.null;
    //     expect(actualBtn).eq('Disable');
    // });
    //
    // it('should verify the input under `Enable/disable` subheader accepts a text', () => {
    //     const input = $('#input-example input');
    //     const value = 'Hello! I Love JS!';
    //     input.addValue(value);
    //     const actual = input.getValue();
    //     expect(actual).eq(value);
    // });
    //
    // it('should verify the input under `Enable/disable` subheader is disable after `Disable` button was clicked', () => {
    //     const button = $$('button');
    //     button[1].click();
    //     browser.waitUntil(
    //         () => {
    //             return $('#message').getText() === 'It\'s disabled!';
    //         },
    //         { timeout: 2000, timeoutMsg: 'Wrong text' },
    //     );
    //     const input = $('#input-example input');
    //     const actual = input.getAttribute('disabled');
    //     const actualBtn = button[1].getText();
    //     expect(actual).eq('true');
    //     expect(actualBtn).eq('Enable');
    //     browser.back();
    // });

    // it('should verify the `Entry Ad` page is open', () => {
    //     $('[href="/entry_ad"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('.example h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/entry_ad');
    //     expect(actualHeader).eq('Entry Ad');
    // });
    //
    // it('should verify the modal window is displayed', () => {
    //     const modal = $('#modal');
    //     const modatTitle = $('#modal .modal .modal-title h3');
    //     modal.waitForDisplayed();
    //     const actualModalIsDisplayed = modal.getAttribute('style');
    //     const modatTitleText = modatTitle.getText();
    //     expect(actualModalIsDisplayed).eq('display: block;');
    //     expect(modatTitleText).eq('THIS IS A MODAL WINDOW');
    // });
    //
    // it('should verify the modal window is closed after clicking the header on the `Entry Ad` page', () => {
    //     const selector = $('.modal-footer p');
    //     const modal = $('#modal');
    //     selector.click();
    //     const actualModalIsDisplayed = modal.getAttribute('style');
    //     expect(actualModalIsDisplayed).eq('display: none;');
    // });
    //
    // it('should verify no modal window popped up after it was closed and the page was reloaded', () => {
    //     browser.refresh();
    //     const modal = $('#modal');
    //     const actual = modal.isDisplayedInViewport();
    //     expect(actual).false;
    // });
    //
    // it('should verify the modal window pops up after `click here` link was clicked on', () => {
    //     browser.deleteAllCookies();
    //     const modal = $('#modal');
    //     const link = $('#restart-ad');
    //     link.click();
    //     modal.waitForDisplayed();
    //     const actual = modal.isDisplayedInViewport();
    //     expect(actual).true;
    //     browser.back();
    // });

    // it('should verify the `Forgot Password` page is open', () => {
    //     $('[href="/forgot_password"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('.example h2').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/forgot_password');
    //     expect(actualHeader).eq('Forgot Password');
    // });
    //
    // it('should verify a user gets redirected to success page after correct credentials were entered into email input field', () => {
    //     const email = $('#email');
    //     const button = $('#form_submit');
    //     email.setValue('test@test.com');
    //     button.click();
    //     const actual = browser.getUrl();
    //     const message = $('#content').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/email_sent');
    //     expect(message).eq('Your e-mail\'s been sent!');
    //     browser.back();
    //     browser.back();
    // });

    // it('should verify the `Login Page` page is open', () => {
    //     $('[href="/login"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('.example h2').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/login');
    //     expect(actualHeader).eq('Login Page');
    // });
    //
    // it('should verify the correct credentials were entered in username and password fields', () => {
    //     const userName = 'tomsmith';
    //     const password = 'SuperSecretPassword!';
    //     const userNameSelector = $('#username');
    //     const passwordSelector = $('#password');
    //     userNameSelector.setValue(userName);
    //     passwordSelector.setValue(password);
    //     const userNameActual = userNameSelector.getValue();
    //     const passwordActual = passwordSelector.getValue();
    //     expect(userNameActual).eq(userName);
    //     expect(passwordActual).eq(password);
    // });
    //
    // it('should verify a user sees a successful message after correct credentials were entered in username and password fields, and `Login` button was clicked', () => {
    //     const loginBtnSelector = $('button');
    //     loginBtnSelector.click();
    //     const urlExpected = 'https://the-internet.herokuapp.com/secure';
    //     const alertMsgSelector = $('#flash');
    //     const alertMsgTextActual = alertMsgSelector.getText();
    //     const alertMsgTextExpected = 'You logged into a secure area!\n×';
    //     const headerTextExpected = 'Secure Area';
    //     const headerTextActual = $('h2').getText();
    //     const urlActual = browser.getUrl();
    //     expect(headerTextActual).eq(headerTextExpected);
    //     expect(alertMsgTextActual).eq(alertMsgTextExpected);
    //     expect(urlActual).eq(urlExpected);
    // });
    //
    // it('should verify the `Logout` button is present', () => {
    //     const button = $('.button');
    //     const actual = button.isDisplayed();
    //     const actualClickable = button.isClickable();
    //     expect(actual).true;
    //     expect(actualClickable).true;
    // });
    //
    // it('should verify user gets redirected to `Login Page` after `Logout` button was clicked', () => {
    //     const button = $('.button');
    //     button.click();
    //     const expected = 'https://the-internet.herokuapp.com/login';
    //     const actual = browser.getUrl();
    //     expect(actual).eq(expected);
    // });
    //
    // it('should verify a user sees a unsuccessful message after incorrect credentials were entered in username and password fields, and `Login` button was clicked', () => {
    //     const userName = 'tom';
    //     const password = 'Super!';
    //     const userNameSelector = $('#username');
    //     const passwordSelector = $('#password');
    //     userNameSelector.clearValue();
    //     userNameSelector.setValue(userName);
    //     passwordSelector.setValue(password);
    //     const loginBtnSelector = $('button');
    //     loginBtnSelector.click();
    //     const urlExpected = 'https://the-internet.herokuapp.com/login';
    //     const alertMsgSelector = $('#flash');
    //     const alertMsgTextActual = alertMsgSelector.getText();
    //     const alertMsgTextExpected = 'Your username is invalid!\n×';
    //     const urlActual = browser.getUrl();
    //     expect(alertMsgTextActual).eq(alertMsgTextExpected);
    //     expect(urlActual).eq(urlExpected);
    // });

    // it('should verify the `Frames` page is open', () => {
    //     browser.url('https://the-internet.herokuapp.com/');
    //     $('[href="/frames"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('.example h3').getText();
    //     expect(actual).eq('https://the-internet.herokuapp.com/frames');
    //     expect(actualHeader).eq('Frames');
    // });
    //
    // it('should verify `iFrame` link gets redirected to iFrame page', () => {
    //     $('[href="/iframe"]').click();
    //     const actual = browser.getUrl();
    //     expect(actual).eq('https://the-internet.herokuapp.com/iframe');
    //     const actualHeader = $('.example h3').getText();
    //     expect(actualHeader).eq('An iFrame containing the TinyMCE WYSIWYG Editor');
    // });
    //
    // it('should verify the iframe accepts the text', () => {
    //     const iFrameSelector = $('#mce_0_ifr');
    //     browser.switchToFrame(iFrameSelector);
    //     const paragraph = $('#tinymce');
    //     paragraph.clearValue();
    //     const text = 'Hello! I am able to write in this form!!!';
    //     paragraph.setValue(text);
    //     const paragraphNew = $('#tinymce p');
    //     const actual = paragraphNew.getText();
    //     expect(actual).eq(text);
    // });
    //
    // it('should clear value after `new document` was clicked', () => {
    //     browser.switchToParentFrame();
    //     const fileBtn = $('#mceu_15-open');
    //     fileBtn.click();
    //     const newDocBtn = $('#mceu_31');
    //     newDocBtn.click();
    //     const iFrameSelector = $('#mce_0_ifr');
    //     browser.switchToFrame(iFrameSelector);
    //     const paragraph = $('#tinymce');
    //     const actual = paragraph.getText();
    //     expect(actual).eq('');
    // });
    //
    // it('should verify the text is bold and Italic', () => {
    //     browser.switchToParentFrame();
    //     const boldBtn = $('[aria-label="Bold"]');
    //     const alignRightBtn = $('[aria-label="Align right"]');
    //     boldBtn.click();
    //     alignRightBtn.click();
    //     const iFrameSelector = $('#mce_0_ifr');
    //     browser.switchToFrame(iFrameSelector);
    //     const text = 'Hello! I am able to write in this form!!!';
    //     const paragraph = $('#tinymce');
    //     paragraph.addValue(text);
    //     const paragraphNew = $('#tinymce p');
    //     const alignActual = paragraphNew.getAttribute('style');
    //     const alignExpected = 'text-align: right;';
    //     const boldActual = $('#tinymce p strong').getText();
    //     expect(alignActual).eq(alignExpected);
    //     expect(boldActual).eq(text);
    // });

    // it('should verify the `Nested frames` page is open', () => {
    //     browser.url('https://the-internet.herokuapp.com/');
    //     $('[href="/nested_frames"]').click();
    //     const actual = browser.getUrl();
    //     expect(actual).eq('https://the-internet.herokuapp.com/nested_frames');
    // });
    //
    // it('should verify the page contains 2 framesets with 2 and 3 frames accordingly', () => {
    //     const frameset1 = $$('frameset frame');
    //     browser.switchToFrame($('frame[name="frame-top"]'));
    //     const frameset2 = $$('frameset frame');
    //     expect(frameset1).to.have.lengthOf(2);
    //     expect(frameset2).to.have.lengthOf(3);
    //     browser.switchToParentFrame();
    // });

    // it('should verify the `Horizontal Slider` page is open', () => {
    //     browser.url('https://the-internet.herokuapp.com/');
    //     $('[href="/horizontal_slider"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('.example h3').getText();
    //     expect(actualHeader).eq('Horizontal Slider');
    //     expect(actual).eq('https://the-internet.herokuapp.com/horizontal_slider');
    // });
    //
    // it('should verify the input is present on the page and has initial value equals 0', () => {
    //     const input = $('input');
    //     const range = $('#range');
    //     const valueActual = range.getText();
    //     expect(input.isDisplayed()).true;
    //     expect(valueActual).eq('0');
    // });
    //
    // it('should move horizontal slider to the right until its maximum value', () => {
    //     const range = $('#range');
    //     const input = $('input');
    //     input.click();
    //     for(let i = 0; i < 5; i += 0.5){
    //         browser.keys('ArrowRight');
    //     }
    //     const valueActual = range.getText();
    //     expect(valueActual).eq('5');
    //     browser.back();
    // });

    // it('should verify the `Hovers` page is open', () => {
    //     $('[href="/hovers"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('.example h3').getText();
    //     expect(actualHeader).eq('Hovers');
    //     expect(actual).eq('https://the-internet.herokuapp.com/hovers');
    // });
    //
    // it('should verify 3 images are presented on the page', () => {
    //     const images = $$('.figure');
    //     for(let i = 0; i < images.length; i++){
    //         const imagesInfo = $$('.figure .figcaption');
    //         const displayBefore = imagesInfo[i].getCSSProperty('display').value;
    //         expect(displayBefore).eq('none');
    //         images[i].moveTo();
    //         const displayAfter = images[i].getCSSProperty('display').value;
    //         expect(displayAfter).eq('block');
    //         const subheader = $$('.figure .figcaption h5' );
    //         expect(subheader[i].getText()).eq(`name: user${i + 1}`);
    //     }
    //     browser.back();
    // });
    //
    // it('should verify the `Inputs` page is open', () => {
    //     $('[href="/inputs"]').click();
    //     const actual = browser.getUrl();
    //     const actualHeader = $('h3').getText();
    //     expect(actualHeader).eq('Inputs');
    //     expect(actual).eq('https://the-internet.herokuapp.com/inputs');
    // });
    //
    // it('should verify the input accepts numbers', () => {
    //     const input = $('input');
    //     input.setValue(10);
    //     const actual = Number.parseInt(input.getValue());
    //     expect(actual).eq(10);
    // });
    //
    // it('should verify the value can be increased by 1 if user clicks arrow up', () => {
    //     const input = $('input');
    //     input.click();
    //     browser.keys('ArrowUp');
    //     const actual = Number.parseInt(input.getValue());
    //     expect(actual).eq(11);
    //     browser.back();
    // });

    it('should verify the `JQueryUI - Menu` page is open', () => {
        $('[href="/jqueryui/menu"]').click();
        const actual = browser.getUrl();
        const actualHeader = $('.example h3').getText();
        expect(actualHeader).eq('JQueryUI - Menu');
        expect(actual).eq('https://the-internet.herokuapp.com/jqueryui/menu');
        browser.back();
    });

    it('should verify the `JavaScript Alerts` page is open', () => {
        $('[href="/javascript_alerts"]').click();
        const actual = browser.getUrl();
        const actualHeader = $('.example h3').getText();
        expect(actualHeader).eq('JavaScript Alerts');
        expect(actual).eq('https://the-internet.herokuapp.com/javascript_alerts');
    });

    it('should verify the 3 buttons are presented on the page', () => {
        const buttons = $$('button');
        const btnExpected = ['Click for JS Alert', 'Click for JS Confirm', 'Click for JS Prompt'];
        let buttonName = [];
        buttons.forEach(button => {
            buttonName.push(button.getText());
        });
        expect(buttonName).to.deep.equal(btnExpected);
    });

});
