const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: "**/2-advanced-examples/*",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
