const { I, homePage, resultPage, productDetailsPage, cartPage } = inject();
const assert = require('assert');

Feature('Add to card functionality');

Before(() => {
  I.amOnPage('/');
});

Scenario('Add a product to shopping cart', async () => {
    const searchString = 'LUNDHAGS';
    homePage.search(searchString);
    resultPage.showProductDetails();
    await productDetailsPage.addToCart();

    //check cart size =1
    I.seeTextEquals('1', '//*[@id="popup"]/div/table/tbody/tr[2]/td');

    //Going back to product page
    I.click('//*[@id="popup"]/div/form/div/button[2]');

    //addToCart again
    // I.amOnPage('/lundhags-authentic-pant-walking-trousers/')
    // I.click('//*[@id="tobasketform"]/div[3]/div[4]/button')

    //check cart size =1
    // I.seeTextEquals('2', '//*[@id="popup"]/div/table/tbody/tr[2]/td');

    //I checkout cart
    I.click('//*[@id="popup"]/div/form/div/button[1]');

    I.amOnPage('/basket/');
    I.fillField('voucherNr','NotAvailable');
    I.click('//*[@id="basket"]/div[3]/div/div[1]/div/form/ul/li[2]/button'); //redeem button
});
