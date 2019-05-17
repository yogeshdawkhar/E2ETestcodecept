
const I = actor();
var navTools = require('./NavTools');
var popup = require('./Popup');

module.exports = {
    addToCartButton: 'img',

    async addToCart() {
        I.click('//*[@id="18bf37f89e28119e06b4b3c28f54e77a"]/a[1]/div[1]/img');
        I.amOnPage('/lundhags-authentic-pant-walking-trousers/')
        I.click('//*[@id="js-varlist-color"]/li[1]/a/img')
        I.click('//*[@id="js-varlist-size"]/li[1]/a');
        I.click('//*[@id="tobasketform"]/div[3]/div[4]/button')
        I.wait(2);

        let cartCount = await I.grabTextFrom('//*[@id="popup"]/div/table/tbody/tr[2]/td');
      
        return cartCount === '1';
    }
}
