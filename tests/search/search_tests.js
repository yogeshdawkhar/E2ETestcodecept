const { I, homePage, resultPage } = inject();
const assert = require('assert');
Feature('Search functionality');

Before(() => {
    I.amOnPage('/');
});

Scenario('Search function is displayed', () => {
    I.seeElement({id: 'search'});
});

Scenario('Search returns results', async () => {
   I.click({id: 'search'});
    const searchString = 'LUNDHAGS';
    I.fillField('searchparam', searchString);
    locate('div').withAttr({ 'data-codecept': 'numberOfProductsInProductlist' })
});

Scenario('Search returns no results', () => {
    const searchString = 'echdjhkfefweho';
    I.fillField('searchparam', searchString);
    locate('div').withText('emptysearch');
});
