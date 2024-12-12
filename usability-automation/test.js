// Description: This script is used to automate the usability testing of the MoviesZone application.                                                               
const { Builder, By, until } = require('selenium-webdriver');

async function clickGetStarted() {
    // Initialize WebDriver for Chrome
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to the landing page of the application
        await driver.get('https://manos-movieszone.netlify.app/'); 
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Wait for the "GET STARTED" button to be visible
        await driver.wait(until.elementLocated(By.css('.loginScreen__getStarted')), 10000);
        await driver.findElement(By.css('.loginScreen__getStarted')).click();
        console.log('Successfully clicked the "GET STARTED" button!');
        await new Promise(resolve => setTimeout(resolve, 3000));

        await driver.wait(until.elementLocated(By.css("input[type='email']")), 10000);
        console.log('Successfully found the email!');
        await driver.findElement(By.css("input[type='email']")).sendKeys('testuser@example.com');
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        // Enter the password
        await driver.findElement(By.css("input[type='password']")).sendKeys('testuser@example.com');
        console.log('Successfully found the password!');
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Click the Sign In button
        await driver.findElement(By.css("button[type='submit']")).click();
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Play Trailers
        // Wait until the row elements are loaded
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

clickGetStarted();




