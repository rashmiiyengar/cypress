# Cypress
This project uses Cypress for end-to-end testing. Cypress is a JavaScript-based end-to-end testing framework built for modern web applications.
This project contains a suite of tests to validate the functionality of the web application.


# Key Features:
Automated tests using Cypress
Headless testing 
Runs on different browsers like Chrome, Firefox, and Electron
Generates screenshots and videos of test failures.

Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (version 12 or above)
npm (comes with Node.js) or yarn for package management
VS Code - Editor

1. Clone the repository:
git clone https://github.com/rashmiiyengar/cypress.git
cd cypress

2. Install dependencies:
npm install

# Running Tests
1. Open Cypress Test Runner 
To open the Cypress Test Runner in interactive mode (with the Cypress GUI):
npx cypress open 

The above commands launches the cypress app where you can manually select tests and watch them run in real time.

2. Running Tests in Headless Mode
To run all tests in headless mode (without opening the GUI):
npx cypress run --headless

<img width="721" alt="Screenshot 2024-10-03 at 9 36 29 PM" src="https://github.com/user-attachments/assets/2a9e39b2-2ac3-4272-97e5-b78bf6c45eaa">


3. Running Tests in a Specific Browser
To run the tests in a specific browser (Chrome, Firefox, Edge):
npx cypress run --browser chrome --headless

4. Run Specific Test File
To run a specific test file:
npx cypress run --spec "cypress/e2e/other/hooks.js" --headless

5. Running Tests with Environment Variables
To pass environment variables during test execution:
npx cypress run --env user=username,pass=password


#  Recording Test Results and Videos
Cypress can record videos of your tests. By default, video recording is disabled in this project. 
You can enable video recording by setting video: true in the Cypress config or using the command: npx cypress run --record
Screenshots and videos will be stored in the /cypress/screenshots and /cypress/videos folders.
<img width="1567" alt="Screenshot 2024-10-03 at 9 37 30 PM" src="https://github.com/user-attachments/assets/16026a22-cddb-43b6-96db-f190d62022d2">

# Additional Commands
Clear Cypress Cache: If you face issues with cached files, run: npx cypress cache clear


 
