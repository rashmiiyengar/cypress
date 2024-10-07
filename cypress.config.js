const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'n11yn6',

  e2e: {

    defaultCommandTimeout:10000,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file);

    },

    env:{
      firstName:"Rash",
      webdriveruni_homepage: "https://webdriveruniversity.com",
    },
    baseUrl: 'https://webdriveruniversity.com',
    video: false, // Enable video recording
    
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern:"cypress/e2e/other/*.js",
    chromeWebSecurity:false,
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
  },
  
});
