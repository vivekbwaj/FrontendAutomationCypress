const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const timeStamp = require('date-fns');
const { install, ensureBrowserFlags  } = require('@neuralegion/cypress-har-generator');

let logTime = timeStamp.format(new Date(), 'yyyy-MM-dd hh:mm:ss');

const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  install(on, config);
  // require('cypress-plugin-retries/lib/plugin')(on)

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      ensureBrowserFlags(browser, launchOptions);
      launchOptions.args.push('--start-fullscreen')
      launchOptions.args.push('--no-sandbox')
      launchOptions.args.push('--disable-gpu')
      launchOptions.args.push('--proxy-bypass-list=<-loopback>')
      return launchOptions;
    }

    if (browser.name === 'electron') {
      launchOptions.args.fullscreen = true;

      return launchOptions;
    }

    if (browser.family === 'chromium' && browser.name === 'edge') {
      launchOptions.args.push('--start-fullscreen')
      return launchOptions
    }
  });

  on('task', {
    info(message) {
      console.log(chalk.yellow(`    INFO - ${logTime}; ${message}`))
      return null
    }
  });

  on('task', {
    fail(message) {
      console.log(chalk.bgRed(`    ERROR - ${logTime}; ${message}`))
      return null
    }
  });

  const file = config.env.configFile || 'prod'

  return getConfigurationByFile(file);
}
