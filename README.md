This is a TAF built using JavaScript and Cypress.

Project Overview
This project contains Cypress tests for amazon.com. The tests are organized in separate cy.js file inside the e2e folder. Each file defines the test for each scenario.

Features

- Utilizes the Cypress testing framework for end-to-end testing.
- Provides a modular and organized structure for test cases.
- Supports easy configuration and test data management.

Prerequisites

- Node.js and npm installed on your machine.

Setup

1. Clone repository to your local machine
2. Navigate to the project directory
3. Install dependencies
4. Run tests in headless mode
5. Run tests in interactive mode

Test Organization
Test cases are located in the cypress/e2e directory.
Page objects are defined in cypress/pages directory.
Test data can be managed in cypress/support/testData.js or fixture files in the cypress/fixtures directory.

Notes:
If the test run in headless mode it will generate a viedo after it pass.
If there is a fialure it will generate a screenshot.
