const { Builder, By, until } = require('selenium-webdriver');

const URL = 'https://manos-movieszone.netlify.app/';
const SELECTORS = {
    getStartedButton: '.loginScreen__getStarted',
    emailInput: "input[type='email']",
    passwordInput: "input[type='password']",
    submitButton: "button[type='submit']"
};

async function initializeDriver() {
    return new Builder().forBrowser('chrome').build();
}

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
    let driver = await initializeDriver();

    try {
        await driver.get(URL);
        await new Promise(resolve => setTimeout(resolve, 3000));

        await clickElement(driver, SELECTORS.getStartedButton);
        console.log('Successfully clicked the "GET STARTED" button!');

        await enterText(driver, SELECTORS.emailInput, 'testuser@example.com');
        console.log('Successfully found the email!');

        await enterText(driver, SELECTORS.passwordInput, 'testuser@example.com');
        console.log('Successfully found the password!');

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
    case 'register':
        registerNewUser();
        break;
    case 'profile':
        navigateToProfile();
        break;
    default:
        console.log('Please provide a valid action: "login", "date", "describe", "profile", "register" or "play"');
        break;
}



async function playTrailer() {
    // Initialize WebDriver for Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        loginToApp();
        // Play Trailers
        await driver.wait(until.elementLocated(By.css('.row__posters')), 10000);

        // Locate the second row element
        const secondRowElement = await driver.findElement(By.css('.row__manos:nth-of-type(5)'));

        // Hover over the second row element if needed
        const actions = driver.actions({ async: true });
        await actions.move({ origin: secondRowElement }).perform();

        // Locate the PLAY button within the second row element
        const playButton = await secondRowElement.findElement(By.css('.hidden-button'));

        // Click the PLAY button
        await playButton.click();
        console.log('Successfully clicked the PLAY button of the second row element.');

        // Wait for the video player to be loaded
        await new Promise(resolve => setTimeout(resolve, 10000));
        console.log("Hovered over the second child and clicked the PLAY button successfully!");
        await driver.sleep(2000);
       
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Quit the browser
        await driver.executeScript('alert("finally, Waiting for 5 seconds before closing the page");');
        console.log('Finally, Waiting for 5 seconds before closing the page.');
        await new Promise(resolve => setTimeout(resolve, 5000));
        await driver.quit();
        console.log('Browser closed.');
    }
}
