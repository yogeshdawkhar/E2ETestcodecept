exports.config = {
  tests: "./tests/*/*.js",
  output: './output',
 helpers: {
    WebDriver: {
      url: 'https://www.bergfreunde.eu',
      browser: 'chrome'
    }
  },
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/HomePage.js',
    resultPage: './pages/ResultPage.js',
    productDetailsPage: './pages/ProductDetailsPage.js',
    popup: './pages/Popup.js',
    cartPage: './pages/CartPage.js'
  },
  plugins: {
   "screenshotOnFail": {
     "enabled": true
   }
 },
  bootstrap: null,
  mocha: {},
  name: 'codeceptexample'
}
