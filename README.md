# **Movies Zone Testing Plan**


## **Links**
- [Azure DevOps](https://dev.azure.com/A00289665/Movies%20Zone)
- [Slack Workspace](https://app.slack.com/client/T083780CDU5/C083NQE925P)
- [GitHub Repo for Tests](https://github.com/manosakpujiha/movieszonetesting)
- [GitHub Repo for Codebase](https://github.com/manosakpujiha/movies-zone)
- [Hosted Application](https://manos-movieszone.netlify.app/)

---
# **🟢Check-In 1 Updates**
## **🔵 Group Information**
- **Manos Akpujiha**: A00289665  
- **Sandra Justus**: A00306078  
- **Suman Humagain**: A00298790  

---

## **🔵 Codebase**

### **Application Description**
**Movies Zone** is a web application designed for movie enthusiasts to explore and stay updated on the latest trailers. It offers a rich library of movie trailers categorized by genres and user preferences.


**Purpose**:  
To provide a centralized platform where users can:
- Stay informed about upcoming movies.
- Discover movies based on genres and trends.

**Key Features**:
- **Extensive Trailer Library**: Browse and explore trailers across various genres.
- **User Authentication**: Personalized experiences with login and registration features.
- **Responsive Design**: Accessible on desktops, tablets, and smartphones.

**Tech Stack**:
- **Frontend**: React.js
- **Backend**: Firebase

---

## **Application Urls**
- [GitHub Repo for Tests](https://github.com/manosakpujiha/movieszonetesting)
- [GitHub Repo for Codebase](https://github.com/manosakpujiha/movies-zone)
- [Hosted Application](https://manos-movieszone.netlify.app/)


## **Selection Reason for Testing**

**Why Movies Zone?**
1. **Real-World Relevance**:
   - Addresses the common use case of exploring movie trailers.
   - Provides valuable insights into creating polished, user-friendly media-focused platforms.

2. **Scalable Use Case**:
   - Testing practices can be extended to similar applications.

---

## **🔵Testing Strategy**

### **Overall Approach**
1. **Test Objectives**:
   - Validate core features: user authentication, movie search, trailer playback, watchlist management.
   - Ensure usability, reliability, and accessibility.

2. **Testing Types to be carried out**:
   - **Unit Testing**: Validate individual components like login and API responses. *#by Manos#*
   - **Integration Testing**: Verify interactions between frontend, backend, and external APIs. *#by Suman#*
   - **System Testing**: Test end-to-end workflows like user registration to watchlist updates. *#by Suman#*
   - **UI Testing**: Check responsiveness and functionality across devices.         *#by Manos#*
   - **Accessibility Testing**: Ensure compliance with standards like screen reader compatibility. *#by Sandra#*
   - **Exploratory Testing**: Identify hidden issues through unscripted tests. *#by Sandra#*

3. **Implementation**:
   - Use **Boundary Value Analysis**, **Equivalence Partitioning**, and **State Transition Testing**.
   - Automate tests using Selenium for UI and Jest for functional testing of the individual components.
   - Integrate tests into CI/CD pipelines for continuous quality assurance.

4. **Outcome**:
   - Deliver a bug-free, user-friendly, and accessible platform for movie enthusiasts.

---
## *🔵Types of Tests*

### *1. Unit Testing*
- *Why*: Validate backend logic, such as authentication and input validation.
- *Example*: Testing registerUser() for correct password hashing.

### *2. Integration Testing*
- *Why*: Verify seamless communication between frontend and backend.
- *Example*: Ensure search queries retrieve correct results from the API.

### *3. System Testing*
- *Why*: Test end-to-end workflows.
- *Example*: From user registration to adding movies to a watchlist.

### **4. User Interface (UI) Testing**
- **Why**: Ensure the app’s interface is visually correct and functional.
- **Example**: Test trailer cards' responsiveness on different devices.

### **5. Usability Testing**
- **Why**: Ensure the app is user-friendly and intuitive.
- **Example**: Verify users can easily locate and play trailers.

### **6. Accessibility Testing**
- **Why**: Ensure compliance with WCAG standards.
- **Example**: Verify screen readers can announce movie titles and descriptions.

---

## **🔵Testing Techniques**

| **Testing Technique**        | **Why Appropriate**                                                                 | **How to Implement**                                                                                       | **Related Testing Types**                                           |
|-------------------------------|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| **Boundary Value Analysis**   | Handles edge cases for input fields like search or registration.                    | Test inputs at minimum, maximum, and just outside boundaries.                                             | Unit Testing, System Testing                                        |
| **Equivalence Partitioning**  | Tests valid/invalid inputs without redundancy.                                      | Group inputs into equivalence classes and test one from each.                                              | Unit Testing, Acceptance Testing                                    |
| **Decision Table Testing**    | Systematically evaluates all combinations of conditions and outcomes.               | Create decision tables for features like login or search filters.                                         | Integration Testing, System Testing                                 |
| **State Transition Testing**  | Ensures proper state changes (e.g., logged out → logged in).                        | Map states and transitions; test each action-triggered state change.                                      | System Testing, UI Testing                                          |
| **Use Case Testing**          | Tests key workflows, such as movie searching or watchlist updates.                  | Identify use cases, define steps, and validate outcomes.                                                  | Acceptance Testing, System Testing                                  |
| **Exploratory Testing**       | Identifies hidden issues through unscripted interactions.                           | Manually interact with the app and document unexpected behaviors.                                         | Usability Testing, System Testing                                   |
## **🔵Links**
- [Azure DevOps](https://dev.azure.com/A00289665/Movies%20Zone)
- [Slack Workspace](https://app.slack.com/client/T083780CDU5/C083NQE925P)



# **🟢Check-In 2 Updates**

## *🔵Meeting 2 Minutes: Movies Zone Project Update*

**Date:** December 9, 2024  
**Time:** 10:30 AM  

---

## Agenda:
1. Update on Unit Tests  
2. Next Steps: Usability Testing  

---

## Key Updates:

### Unit Testing Progress:
- **Landing Page Component:**  
  - Unit tests completed by **Sandra Justus**.  
  - Tests verified:
    - Main header rendering.
    - Subheader rendering.
    - "GET STARTED" button functionality.  
  - **Result:** All tests passed successfully.  

- **Signup Component:**  
  - Unit tests completed by **Suman Humagain**.  
  - Tests covered:
    - Input validation.
    - Button click functionality.
    - Submission handling.  
  - **Result:** All tests passed successfully.  

- **Nav Component:**  
  - Unit tests completed by **Manos Akpujiha**.  
  - Tests included:
    - Navigation bar rendering.
    - User email display.
    - Navigation button functionality.  
  - **Result:** All tests passed successfully.  

### Overall Unit Testing Status:
- Core components of the project have been tested with Jest and React Testing Library.  
- The application’s core functionalities are validated and stable.  

---

## Next Steps:
### Usability Testing:
1. **Objective:** Evaluate user interaction and overall application flow.  
2. **Tool:*Selenium*

## *🔵Progress Updates*

### *Tasks Inprogress:*

### *Unit Tests:*
- Implemented tests for Firebase authentication methods using Jest.
- Verified the correct functioning of login, registration, and authentication error handling.

### *UI Tests:*
- Designed tests to check the presence of required elements, such as the search and filter components.
- Tested the functionality of the SignIn button to ensure it responds correctly when clicked.
- Began verifying the responsiveness and correct display of UI components across different devices.

### *SignIn Screen and NavBar Component Tests:*
- Added test cases for the SignIn Screen and NavBar Component to ensure correct rendering and functionality under different conditions.

### *Accessibility Tests:*
- Conducted basic accessibility checks using tools like Lighthouse and manual testing.
- Fixed issues found in form elements, such as missing input labels and ensuring buttons are focusable.


## *🔵Details of Tests Implemented*
### • Testing types and techniques applied.
      Testing Techniques Applied:
      1. Boundary Value Analysis (BVA):
      Description: Focuses on testing edge cases around boundaries where the behavior of the component is expected to change.
      Examples in the Tests:
      The test that checks whether the nav__black class is applied when scrolling past a threshold.
      The test ensuring proper rendering when the user is null or defined (boundary between "no user" and "user present").
      2. Equivalence Partitioning:
      Description: Divides input data into equivalent partitions and tests one representative value from each partition.
      Examples in the Tests:
      The fallback username test for when the user is undefined represents the "no user" partition.
      The test for rendering the correct email when the user is defined represents the "valid user" partition.
      3. State Transition Testing:
      Description: Tests different states of the component based on input or events (e.g., scrolling, user actions).
      Examples in the Tests:
      The test for applying the nav__black class when show is true reflects a transition from "default" to "scrolled" state.
      Tests verifying logo and avatar navigation simulate transitions between different application states (e.g., moving to home or profile pages).



### • Explanations of how each test was implemented.
### • Code snippets or references to relevant code files.
      1. Testing Type: Unit Testing
      Suitability for the Codebase:
      Unit testing is appropriate for the Nav.js component because it isolates individual functionality of the component, such as rendering elements based on user state or applying styles dynamically. This ensures that the component works as expected without interference from other parts of the application.
      React components often have distinct states and behaviors that can be easily isolated and tested, making unit tests a natural fit.
      Testing Techniques Applied:
      Boundary Value Analysis (BVA)
      Why Suitable:
      Components like Nav.js often have thresholds that trigger specific behaviors (e.g., applying the nav__black class when scrolling past a certain point). Boundary Value Analysis is effective for testing these thresholds to ensure the expected behavior occurs right at and around the boundary.
      How Implemented:
      Example Test:
      Checking whether the nav__black class is applied when show becomes true due to the scroll threshold.
      Technique in Action:
      Inputs like scrollY = 100 (boundary condition) were used to determine if the class application logic was functioning correctly.
      Relationship to Testing Type:
      BVA allows thorough testing of edge cases within a single component, a key focus of unit testing.
      Equivalence Partitioning
      Why Suitable:
      Equivalence Partitioning reduces redundant tests by dividing possible inputs into equivalent classes, each of which should produce the same output. For the Nav.js component, there are distinct classes like:
      "No user logged in" (user === null).
      "User logged in" (user !== null).
      How Implemented:
      Example Tests:
      Testing for "Guest" being displayed when the user is undefined or null.
      Testing for the user's email being displayed when a valid user object is passed.
      Technique in Action:
      Each partition (no user vs. user) was tested with one representative value to ensure coverage.
      Relationship to Testing Type:
      This technique ensures unit tests cover all meaningful input partitions for the component.
      State Transition Testing
      Why Suitable:
      The Nav.js component dynamically changes its appearance and functionality based on the application state (e.g., show changes when scrolling). Testing these transitions ensures the component behaves as expected under different state conditions.
      How Implemented:
      Example Tests:
      Ensuring the nav__black class is applied when show is true.
      Verifying navigation to the home page (navigate('/')) when the logo is clicked.
      Testing the transition to the profile page (navigate('/profile')) when the avatar is clicked.
      Technique in Action:
      State changes were simulated through mocked interactions (e.g., scroll events, navigate calls) and verified via DOM assertions.
      Relationship to Testing Type:
      Unit tests are ideal for validating state-dependent logic within a single component.


## *🔵Challenges Faced and Solutions Applied*

#### Landing Page Unit Tests
*Contributor:* Sandra Justus

- *Obstacle:* 
  - Encountered an error related to HTMLFormElement.prototype.submit not being implemented in the test environment.
- *Solution:* 
  - Refactored the button click test to use preventDefault in the handleClick function, avoiding the actual form submission during the test.

- *Obstacle:* 
  - Difficulty ensuring that the changeScreen function was called when the "GET STARTED" button was clicked.
- *Solution:* 
  - Mocked the changeScreen function and verified its invocation using jest.fn().

#### Nav Component Unit Tests
*Contributor:* Manos Akpujiha

- *Obstacle:* 
  - Tests failed to locate elements like the navigation logo and avatar due to the absence of accessible roles or matching queries.
- *Solution:* 
  - Added alt attributes (e.g., alt="logo", alt="avatar") and utilized getByAltText queries to accurately target elements.

- *Obstacle:* 
  - Challenges with simulating the "scroll" event for testing the dynamic class application (nav__black).
- *Solution:* 
  - Used window.scrollTo to programmatically trigger the scroll event and verified class changes using assertions.

- *Obstacle:* 
  - Ensuring proper integration with Redux for tests involving user state.
- *Solution:* 
  - Mocked the Redux store using redux-mock-store to test scenarios with and without user data effectively.

### Summary
Both components faced environment-specific issues and challenges simulating user interactions. Each obstacle was resolved through strategic use of mocks, utility functions, and proper test environment configurations, ensuring accurate and reliable test results.





