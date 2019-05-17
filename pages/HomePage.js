const I = actor();

module.exports = {

    searchTextbox: 'searchparam',

    async search(searchString = 'LUNDHAGS') {
        I.fillField(this.searchTextbox, searchString);
    },
  };
