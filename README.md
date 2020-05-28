## Frontend Automation using
<img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png">    

#### Installation:
- Install *nodejs 12.4.1 lts* [Link](https://nodejs.org/en/download/)
- Install Vscode [link](https://code.visualstudio.com/download)

#### Folder Structure
- [fixtures](fixtures) holds optional JSON data formocking, [read more] [https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Fixture-Files]
- [integration](integration) holds the actual test files, [read more] [https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Test-files]
- [plugins](plugins) allow you to customize how tests are loaded, [read more] [https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Plugin-files]
- [support](support) Files that contain reusable behavior such as Custom Commands or global overrides that you want applied and available to all of your spec files, [read more] [https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Support-file]

#### Project Setup:
- git clone repo 
- npm install

#### Write Code:
- Add `/// <reference types="Cypress" />` and `/// <reference types="../support" />` reference on the top, to get typed reference.
- Add new spec file with the format TC00*_SampleTest*_spec.js
- Write functions in PageObjects as E.g login
- Write helper methods in *support/actions.js*
- Write custom commands in *support/commands.js* [read more] [https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax]
- Add type declaration for custom commands in *support/index.d.ts*
- Add test data in *data/testdata.js*
- Keep mock json files in *fixtures/*

#### Configure/update/set Test Environments:
- Open config and update test environment urls,user,pass and update it to config.js  
- Test environment json files names are case sensitive
- To run test on specific environment update `configFile=uat or configFile=prod`  

#### Test:
- `npm run cy:chrome` run tests in chrome browser
- `npm run cypress:open` for test development and run(*Test Watcher is set to false*)
- `npm run cy:test` run all tests in headless
- `npx cypress run --env configFile=uat --headed --spec 'cypress/integration/TC002_Login_Spec.js'` To run specific test in chrome

#### Generate Report Locally:
- `npm run combine-reports` to combine mocha json report
- `npm run generate-report` to generate html report

### Built With
* [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
* [mocha](https://github.com/mochajs/mocha)
* [Chalk](https://github.com/chalk/chalk)
* [Chance](https://github.com/chancejs/chancejs)
* [Faker](https://github.com/marak/Faker.js/)
* [date-fns](https://github.com/date-fns/date-fns)
* [lodash](https://github.com/lodash/lodash)
* [cross-env](https://github.com/kentcdodds/cross-env)
* [validator](https://github.com/validatorjs/validator.js)