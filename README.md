# Movies Zone Testing

## Group Information
**Group Members:**
- Name: Suman Humagain
- Student Number: A00298790
  
- Name: Manos Akpujiha
- Student Number: A00289665
  
- Name: Sandra Nkemjika Justus
- Student Number: A00306078

## Codebase
### Application Description
Movies Zone is a web application designed to be a one-stop destination for users who want to watch the latest movie trailers and teasers. It has an extensive library of trailers from various movie genres. Users can explore the latest movies, watch trailers, and stay up to date with what's new in the film industry.

### Application URL
- Link to the repository: [Movies Zone GitHub Repository](https://github.com/manosakpujiha/movieszonetesting.git)

### Selection Reason
Our group selected this application for testing due to its interactive nature and the variety of features such as user authentication, movie exploration, and trailer playback. These features offer great opportunities to perform both UI and unit testing, ensuring a seamless user experience.

---

## Initial Plan
### Testing Strategy
Our testing approach will focus on ensuring the functionality of user authentication, movie display, and trailer playback. We will implement unit tests to validate individual functions and UI tests to ensure a smooth user experience.

### Types of Tests
Unit Testing: Focused on individual components to validate their correctness.

Integration Testing: Ensured the smooth interaction between various modules, including API integration.

#### Unit Testing
Unit tests were designed to verify the correctness of individual components. These tests included:

  **Sign-Up Form Validation: Tested required fields, valid/invalid email formats, and password strength.**
  **Sign-In Form Validation: Ensured validation for email format and rejection of invalid credentials.**
  **Play Trailer Functionality: Confirmed that the play button loads trailers correctly.**
  **Movie Card Hover Functionality: Tested that hovering displays details and unhovering removes them.**
  
  Example Test Cases:
  **Validate email format in the sign-up and sign-in forms.**
  **Ensure weak passwords are rejected during sign-up.**
  **Confirm successful creation of a new user account with valid credentials.**
  **Verify proper error messages for invalid sign-in attempts.**

#### Integration Testing
Integration tests validated the interaction between the front-end and back-end components. Key areas included:

  **Sign-Up API Integration: Verified successful user registration through API calls.**
  **Sign-In API Integration: Tested user authentication and error handling for incorrect credentials.**
  Session Management: Ensured sessions persist across pages and expire correctly on sign-out.**
  Trailer Playback API Integration: Confirmed trailers load correctly from external sources like YouTube.**
  Example Test Cases:
  **Ensure valid API responses for sign-up and sign-in actions.**
  **Validate session tokens generated on login and invalidated on logout.**
  **Verify seamless trailer playback with no interruptions.**





