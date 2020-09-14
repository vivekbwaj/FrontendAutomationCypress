import './commands';
import 'cypress-redux';
require('cypress-xpath');
// require('cypress-plugin-retries');
require('@neuralegion/cypress-har-generator/commands');
require('cypress-react-unit-test/support');

const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
        addContext({test}, `../cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`)
    }
    //If video is required
    //addContext({ test },  `../cypress/videos/${Cypress.spec.name}.mp4`);
});
