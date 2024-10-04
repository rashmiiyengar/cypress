const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    defaultCommandTimeout:10000,
    pageLoadTimeout:120000,
    env:{
      firstName:"Rash",
      webdriveruni_homepage: "https://webdriveruniversity.com",
    },
    baseUrl: 'https://webdriveruniversity.com',
    video: false, // Enable video recording
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern:"cypress/e2e/other/*.js",
    chromeWebSecurity:false,
    
  },
  
});
