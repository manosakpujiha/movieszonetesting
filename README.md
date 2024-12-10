# **Movies Zone Testing Plan**

## **Links**
- [Azure DevOps](https://dev.azure.com/A00289665/Movies%20Zone)
- [Slack Workspace](https://app.slack.com/client/T083780CDU5/C083NQE925P)
- [GitHub Repo for Tests](https://github.com/manosakpujiha/movieszonetesting)
- [GitHub Repo for Codebase](https://github.com/manosakpujiha/movies-zone)
- [Hosted Application](https://manos-movieszone.netlify.app/)

---

## **Group Information**
- **Manos Akpujiha**: A00289665  
- **Sandra Justus**: A00306078  
- **Suman Humagain**: A00298790  

---

## **Codebase**

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

## **Selection Reason for Testing**

**Why Movies Zone?**
1. **Real-World Relevance**:
   - Addresses the common use case of exploring movie trailers.
   - Provides valuable insights into creating polished, user-friendly media-focused platforms.

2. **Scalable Use Case**:
   - Testing practices can be extended to similar applications.

---

## **Initial Testing Plan**

### **Overall Approach**
1. **Test Objectives**:
   - Validate core features: user authentication, movie search, trailer playback, watchlist management.
   - Ensure usability, reliability, and accessibility.

2. **Testing Types**:
   - **Unit Testing**: Validate individual components like login and API responses.
   - **Integration Testing**: Verify interactions between frontend, backend, and external APIs.
   - **System Testing**: Test end-to-end workflows like user registration to watchlist updates.
   - **UI Testing**: Check responsiveness and functionality across devices.
   - **Accessibility Testing**: Ensure compliance with standards like screen reader compatibility.
   - **Exploratory Testing**: Identify hidden issues through unscripted tests.

3. **Implementation**:
   - Use **Boundary Value Analysis**, **Equivalence Partitioning**, and **State Transition Testing**.
   - Automate tests using Selenium for UI and Jest for backend components.
   - Integrate tests into CI/CD pipelines for continuous quality assurance.

4. **Outcome**:
   - Deliver a bug-free, user-friendly, and accessible platform for movie enthusiasts.

---
## *Types of Tests*

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

## **Testing Techniques**

| **Testing Technique**        | **Why Appropriate**                                                                 | **How to Implement**                                                                                       | **Related Testing Types**                                           |
|-------------------------------|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| **Boundary Value Analysis**   | Handles edge cases for input fields like search or registration.                    | Test inputs at minimum, maximum, and just outside boundaries.                                             | Unit Testing, System Testing                                        |
| **Equivalence Partitioning**  | Tests valid/invalid inputs without redundancy.                                      | Group inputs into equivalence classes and test one from each.                                              | Unit Testing, Acceptance Testing                                    |
| **Decision Table Testing**    | Systematically evaluates all combinations of conditions and outcomes.               | Create decision tables for features like login or search filters.                                         | Integration Testing, System Testing                                 |
| **State Transition Testing**  | Ensures proper state changes (e.g., logged out → logged in).                        | Map states and transitions; test each action-triggered state change.                                      | System Testing, UI Testing                                          |
| **Use Case Testing**          | Tests key workflows, such as movie searching or watchlist updates.                  | Identify use cases, define steps, and validate outcomes.                                                  | Acceptance Testing, System Testing                                  |
| **Exploratory Testing**       | Identifies hidden issues through unscripted interactions.                           | Manually interact with the app and document unexpected behaviors.                                         | Usability Testing, System Testing                                   |

---

## **Check-In 2 Updates**
### *Progress Updates*

### *Tasks Inprogress:*
### *Unit Tests:*

Implemented tests for Firebase authentication methods using Jest.
Verified the correct functioning of login, registration, and authentication error handling.
### *UI Tests:*

Designed tests to check the presence of required elements, such as the search and filter components.
Tested the functionality of the SignIn button to ensure it responds correctly when clicked.
Began verifying the responsiveness and correct display of UI components across different devices.

### *SignIn Screen and NavBar Component Tests:*
Added test cases for the SignIn Screen and NavBar Component to ensure correct rendering and functionality under different conditions.

### *Accessibility Tests:*
Conducted basic accessibility checks using tools like Lighthouse and manual testing.
Fixed issues found in form elements, such as missing input labels and ensuring buttons are focusable.



