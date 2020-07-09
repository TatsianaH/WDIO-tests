import { assert } from 'assert';

describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Default counter', function () { //define sub-suite title by passing a string

        it('TC-001 Header is present on the page  ', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            assert.equal(title, 'Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        });

    });

});
