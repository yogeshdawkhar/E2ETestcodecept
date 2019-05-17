const I = actor();

module.exports = {
    resultBar: '#product-list',
    productName: 'img',
    noResult: 'h1[id="noResultsTitle"]',

    async hasResults(searchString) {
        const results = await I.grabTextFrom(this.productName);
        return results[0].toLowerCase().includes(searchString.toLowerCase());
    },

    showProductDetails : function() {
        I.click(this.productName);
        I.amOnPage('/brands/lundhags/');
    }
}
