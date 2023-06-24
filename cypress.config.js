const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 
module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
  },
});
