const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cms-lyart.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "chromeWebSecurity": false //add this param to your config file
  
});

/* module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cms-lyart.vercel.app',
    prod: "http://cms.chtoma.com/api",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "chromeWebSecurity": false

}) */
