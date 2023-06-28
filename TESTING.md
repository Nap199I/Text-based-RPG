# Testing

Return back to the [README.md](README.md) file.

In this section I will be showing that I have conducted enough testing to legitimately believe that the site works well.
Essentially, in this part, I will be going over all of my project's features to ensure that they all work as intended,
with the project providing an easy and straightforward way for the users to achieve their goals.

## Code Validation

I will use this space to discuss code validation for all of my own code files (where applicable).
I will not validate external libraries/frameworks, such as imported Bootstrap, Font Awesome, etc.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

I validated the live pages (each of them) using the deployed URL.
This will give me a custom URL as well, which I will use on my testing documentation.
It makes it easier to return back to a page to validate it again in the future.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnap199i.github.io%2FText-based-RPG%2F) | ![screenshot](documentation/testing/htmlvalidator-home.jpg) | Pass: No Errors |
| Contact | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnap199i.github.io%2FText-based-RPG%2Fcontact.html) | ![screenshot](documentation/testing/htmlvalidator-contact.jpg) | Pass: No Errors |
| Game | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnap199i.github.io%2FText-based-RPG%2Fgame.html) | ![screenshot](documentation/testing/htmlvalidator-game.jpg) | Pass: No Errors |
| confirmation | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnap199i.github.io%2FText-based-RPG%2Fconfirmation.html) | ![screenshot](documentation/testing/htmlvalidator-confirmation.jpg) | Pass: No Errors |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS files.

CSS code validation documentation:

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnap199i.github.io%2FText-based-RPG%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css) | ![screenshot](documentation/testing/css-validation.jpg) | Pass on personal code: No Errors, the shown errors are from the font awesome and bootstrap library as seen in the screenshot and the warnings are from the imported bootstrap and font awesome files. |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

JavaScript code validation documentation:

| File | Screenshot | Notes |
| --- | --- | --- |
| countdown.js | ![screenshot](documentation/testing/jshint-countdowncode.jpg) | Pass: No Errors |
| data.js | ![screenshot](documentation/testing/jshint-datacode.jpg) | Unused variable from external game.js file |
| game.js | ![screenshot](documentation/testing/jshint-gamecode.jpg) |  Unused variable from external data.js file |
| sendEmail.js | ![screenshot](documentation/testing/jshing-emailcode.jpg) | Unused and undefined variable from external file |

## Browser Compatibility

This space will be used to discuss testing of the live/deployed site on various browsers.

Browser testing documentation:

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/testing/chrome.png) | Works as expected |
| Edge | ![screenshot](documentation/testing/msedge.png) | Works as expected |
| Brave | ![screenshot](documentation/testing/brave.png) | Works as expected |
| Opera | ![screenshot](documentation/testing/opera.jpg) | Works as expected |


## Responsiveness

Here i will discuss testing the live/deployed site on various device sizes and screen sizes.

Responsiveness testing documentation:

I've tested my deployed project on devices and DevTools screen sizes to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile small (DevTools) | ![screenshot](documentation/testing/mobile-small.jpg) | Works as expected |
| Mobile medium (DevTools) | ![screenshot](documentation/testing/mobile-m.jpg) | Works as expected |
| Mobile large (DevTools) | ![screenshot](documentation/testing/mobile-l.jpg) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/testing/tablet.jpg) | Works as expected |
| laptop (DevTools) | ![screenshot](documentation/testing/laptop.jpg) | Works as expected |
| laptop large (DevTools) | ![screenshot](documentation/testing/laptop-l.jpg) | Works as expected |
| Desktop | ![screenshot](documentation/testing/desktop.jpg) | Works as expected |
| 4K Monitor (DevTools) | ![screenshot](documentation/testing/4k.jpg) | Works as expected |

## Lighthouse Audit

Here i will discuss testing the live/deployed site's Lighthouse Audit reports.

Lighthouse testing documentation:

I've tested my deployed project using the Lighthouse Audit tool for all of my pages to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/testing/lighthouse-indexmobile.jpg) | Some warnings due to large images |
| Home | Desktop | ![screenshot](documentation/testing/lighthouse-index.jpg) | Some warnings due to large images |
| contact | Mobile | ![screenshot](documentation/testing/lighthouse-contactmobile.jpg) | Some warnings due to large images |
| contact | Desktop | ![screenshot](documentation/testing/lighthouse-contact.jpg) | Few warnings |
| game | Mobile | ![screenshot](documentation/testing/lighthouse-gamemobile.jpg) | Some warnings due to large images |
| game | Desktop | ![screenshot](documentation/testing/lighthouse-game.jpg) | Some warnings due to large images |
| confirmation | Mobile | ![screenshot](documentation/testing/lighthouse-confirmationmobile.jpg) | Some minor warnings |
| confirmation | Desktop | ![screenshot](documentation/testing/lighthouse-confirmation.jpg) | Some minor warnings |

## Defensive Programming

I will be using this section to discuss what devensive programming was used within this project.

Defensive programming was manually tested with the below user acceptance testing:

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home Page | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| | Click on Start to be taken to game page | Redirection to game page | Pass | |
| game page | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| confirmation page | | | | |
| | Click on Logo | Redirection to Home page | Pass | |
| | Automatic redirect | Redirection to Home page | Pass | |
| | Countdown timer | From ten to zero | Pass | |
| | Click on Home link in navbar | Redirection to Home page | Pass | |
| Contact Page | | | | |
| | Click on Contact link in navbar | Redirection to Contact page | Pass | |
| | Enter first/last name | Field will accept freeform text | Pass | |
| | Enter valid email address | Field will only accept email address format | Pass | |
| | Enter message in textarea | Field will accept freeform text | Pass | |
| | Click the Submit button | Redirects user to confirmation page | Pass | |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to know what the site is, so that I can make a decision on whether i want to continue to engage with the site. | ![screenshot](documentation/testing/user-whereyouare.jpg) |
| As a new site user, I would like to know what I can do on the site, so that I can go and do it. | ![screenshot](documentation/testing/user-what.jpg) ![screenshot](documentation/testing/user-how.jpg) |
| As a new site user, I would like to contact the administration, so that I can ask any questions I may have, report any bugs or give any ideas to help improve the site. | ![screenshot](documentation/testing/user-contact.jpg) |
| As a new site user, I would like to find out how to play, so that I can play the game. | ![screenshot](documentation/testing/user-htpbutton.jpg) ![screenshot](documentation/testing/user-htpcontent.jpg) |
| As a returning site user, I would like to find the game, so that I can play a different story line. | ![screenshot](documentation/testing/user-how.jpg) |
| As a returning site user, I would like to contact the administration, so that I can ask any questions I may have, report any bugs or give any ideas to help improve the site. | ![screenshot](documentation/testing/user-contact.jpg) |
| As a site administrator, I should be able to access the page code, so that I can update and add new content. | ![screenshot](documentation/testing/user-newcontentarea.jpg) |
| As a site administrator, I should be able to recieve and answer queries by email, so that I can assist anyone with any questions or ideas. | ![screenshot](documentation/testing/user-contact.jpg) |

## Automated Testing

I have conducted a series of automated tests on my application.

I fully acknowledge and understand that, in a real-world scenario, an extensive set of additional tests would be more comprehensive.

### JavaScript (Jest Testing)

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Adjust the code below (file names, etc.) to match your own project files/folders.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

I have used the [Jest](https://jestjs.io) JavaScript testing framework to test the application functionality.

In order to work with Jest, I first had to initialize NPM.

- `npm init`
- Hit `enter` for all options, except for **test command:**, just type `jest`.

Add Jest to a list called **Dev Dependencies** in a dev environment:

- `npm install --save-dev jest`

**IMPORTANT**: Initial configurations

When creating test files, the name of the file needs to be `file-name.test.js` in order for Jest to properly work.

Due to a change in Jest's default configuration, you'll need to add the following code to the top of the `.test.js` file:

```js
/**
 * @jest-environment jsdom
 */

const { test, expect } = require("@jest/globals");
const { function1, function2, function3, etc. } = require("../script-name");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
```

Remember to adjust the `fs.readFileSync()` to the specific file you'd like you test.
The example above is testing the `index.html` file.

Finally, at the bottom of the script file where your primary scripts are written, include the following at the bottom of the file.
Make sure to include the name of all of your functions that are being tested in the `.test.js` file.

```js
if (typeof module !== "undefined") module.exports = {
    function1, function2, function3, etc.
};
```

Now that these steps have been undertaken, further tests can be written, and be expected to fail initially.
Write JS code that can get the tests to pass as part of the Red-Green refactor process.

Once ready, to run the tests, use this command:

- `npm test`

**NOTE**: To obtain a coverage report, use the following command:

- `npm test --coverage`

Below are the results from the tests that I've written for this application:

| Test Suites | Tests | Coverage | Screenshot |
| --- | --- | --- | --- |
| 1 passed | 16 passed | 55% | ![screenshot](documentation/js-test-coverage.png) |
| x | x | x | repeat for all remaining tests |

#### Jest Test Issues

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

Use this section to list any known issues you ran into while writing your Jest tests.
Remember to include screenshots (where possible), and a solution to the issue (if known).

This can be used for both "fixed" and "unresolved" issues.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

## Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

### GitHub **Issues**

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

An improved way to manage bugs is to use the built-in **Issues** tracker on your GitHub repository.
To access your Issues, click on the "Issues" tab at the top of your repository.
Alternatively, use this link: https://github.com/Nap199I/Text-based-RPG/issues

If using the Issues tracker for your bug management, you can simplify the documentation process.
Issues allow you to directly paste screenshots into the issue without having to first save the screenshot locally,
then uploading into your project.

You can add labels to your issues (`bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s).

Once you've sorted the issue, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following format:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/Nap199I/Text-based-RPG/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/Nap199I/Text-based-RPG/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/Nap199I/Text-based-RPG/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/Nap199I/Text-based-RPG/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/Nap199I/Text-based-RPG/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/Nap199I/Text-based-RPG/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/Nap199I/Text-based-RPG/issues/5) | Open |

## Unfixed Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

Some examples:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

There are no remaining bugs that I am aware of.
