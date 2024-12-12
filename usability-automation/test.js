const { Builder, By, until } = require('selenium-webdriver');

const URL = 'https://manos-movieszone.netlify.app/';
const SELECTORS = {
    getStartedButton: '.loginScreen__getStarted',
    signUp: '.loginScreen__getStarted',
    emailInput: "input[type='email']",
    passwordInput: "input[type='password']",
    submitButton: "button[type='submit']",
    createAccountButton: "button[type='submit']",
    signUpLink: '.signupScreen__link'
};
const SIGNUP_SELECTORS = {
    getStartedButton: '.loginScreen__getStarted',
    nameInput: "input[type='name']",
    emailInput: "input[type='email']",
    passwordInput: "input[type='password']",
    createAccountButton: "button[type='submit']",
    signUpLink: '.signupScreen__link'
};

const NAV_SELECTORS = {
    avatar: '.nav__avatar',
};

const PROFILE_SELECTORS = {
    userEmail: '.profileScreen__details h2',  // User email displayed on profile page
    profileImage: '.profileScreen__info img', // Profile image on the profile page
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
        //await driver.quit();
        console.log('Browser closed.');
    }
}

async function playTrailer() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Add your play trailer logic here
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


async function navigateToProfile() {
    let driver;
    try {
        // Get the driver by logging in
        driver = await loginToApp();

        // Step 1: Wait for the avatar to be located and click it
        await driver.findElement(By.css(NAV_SELECTORS.avatar)).click();

        // const avatar = await driver.findElement(By.css(NAV_SELECTORS.avatar));
        // await avatar.click();
        console.log('Successfully clicked the profile avatar!');

        // Step 2: Wait for the profile page to load (waiting for user email to be visible)
        await waitForElement(driver, PROFILE_SELECTORS.userEmail);
        console.log('Successfully navigated to the profile page!');

        // Step 3: Optionally, you can take actions or validate information on the profile page
        const userEmail = await driver.findElement(By.css(PROFILE_SELECTORS.userEmail)).getText();
        console.log('User email on profile page:', userEmail);

        // Optionally, verify the profile image is displayed
        const profileImage = await driver.findElement(By.css(PROFILE_SELECTORS.profileImage));
        const imageSrc = await profileImage.getAttribute('src');
        console.log('Profile image source:', imageSrc);

    } catch (error) {
        console.error('An error occurred during profile navigation:', error);
    } finally {
        if (driver) {
            await driver.quit();  // Quit driver only if it was initialized
            console.log('Browser closed.');
        }
    }
}


async function registerNewUser() {
    let driver = await initializeDriver();

    try {
        await driver.get(URL);
        
        // Wait for the page to load completely
        await driver.sleep(3000);

        // Click the "GET STARTED" button
        await clickElement(driver, SIGNUP_SELECTORS.getStartedButton);
        console.log('Successfully clicked the "GET STARTED" button!');

        // Wait and click the "Sign Up now" link
        await waitForElement(driver, SIGNUP_SELECTORS.signUpLink);
        await clickElement(driver, SIGNUP_SELECTORS.signUpLink);
        console.log('Successfully clicked Sign Up now button!');

        // Enter display name
        await enterText(driver, SIGNUP_SELECTORS.nameInput, 'Test User');
        console.log('Successfully entered the display name!');

        // Enter email
        await enterText(driver, SIGNUP_SELECTORS.emailInput, 'testuser@example.com');
        console.log('Successfully entered the email!');

        // Enter password
        await enterText(driver, SIGNUP_SELECTORS.passwordInput, 'testpassword');
        console.log('Successfully entered the password!');

        // Click the "Create Account" button
        await clickElement(driver, SIGNUP_SELECTORS.createAccountButton);
        console.log('Successfully clicked the "Create Account" button!');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Browser closed.');
    }
}

// async function registerNewUser() {
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         // Add your register new user logic here
//     } catch (error) {
//         console.error('An error occurred:', error);
//     } finally {
//         await driver.quit();
//         console.log('Browser closed.');
//     }
// }


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
