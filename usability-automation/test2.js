const { Builder, By, until } = require('selenium-webdriver');

const URL = 'https://manos-movieszone.netlify.app/';
const SELECTORS = {
    getStartedButton: '.loginScreen__getStarted',
    emailInput: "input[type='email']",
    passwordInput: "input[type='password']",
    submitButton: "button[type='submit']"
};

async function waitForElement(driver, selector, timeout = 10000) {
    await driver.wait(until.elementLocated(By.css(selector)), timeout);
}

async function clickElement(driver, selector) {
    await waitForElement(driver, selector);
    await driver.findElement(By.css(selector)).click();
}

async function enterText(driver, selector, text) {
    await waitForElement(driver, selector);
    await driver.findElement(By.css(selector)).sendKeys(text);
}

async function loginToApp() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(URL);
        await driver.sleep(3000);

        await clickElement(driver, SELECTORS.getStartedButton);
        console.log('Successfully clicked the "GET STARTED" button!');

        await enterText(driver, SELECTORS.emailInput, 'testuser@example.com');
        console.log('Successfully entered the email!');

        await enterText(driver, SELECTORS.passwordInput, 'testuser@example.com');
        console.log('Successfully entered the password!');

        await clickElement(driver, SELECTORS.submitButton);
        console.log('Successfully logged in!');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
}

async function playTrailer() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Add your play trailer logic here
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
}

async function readVideoDescription() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Add your read video description logic here
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
}

async function readVideoDate() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Add your read video date logic here
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
}

const action = process.argv[2];

switch (action) {
    case 'login':
        loginToApp();
        break;
    case 'play':
        playTrailer();
        break;
    case 'describe':
        readVideoDescription();
        break;
    case 'date':
        readVideoDate();
        break;
    default:
        console.log('Please provide a valid action: "login", "date", "describe" or "play"');
}