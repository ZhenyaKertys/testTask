const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.vercel.store',
    viewportHeight: 890,
    viewportWidth: 1440,
  },
  
});
