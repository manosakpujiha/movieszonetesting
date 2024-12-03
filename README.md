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



## Integration Testing

#### Boundary Value Analysis
Why it is appropriate:
•	The Movies Zone application includes various input fields, such as search bar queries, registration forms (e.g., usernames, passwords), and numeric limits (e.g., watchlist length). Boundary Value Analysis (BVA) ensures these fields handle edge cases properly.
How to implement it:
1.	Identify input fields or values with defined limits (e.g., maximum characters in a username or search query).
2.	Test the inputs at:
   Minimum boundary (e.g., 1 character).
   Maximum boundary (e.g., 50 characters).
  Just outside the boundaries (e.g., 0 characters, 51 characters).
3.	Validate that the system handles all boundary cases correctly (e.g., appropriate error messages, successful submissions).
Related Testing Types:
   Unit Testing: To validate the behavior of individual form validation functions.
   System Testing: To ensure the entire workflow handles boundary inputs seamlessly.

#### Equivalence Partitioning
Why it is appropriate:
•	The application processes inputs like genres, valid/invalid credentials, and user actions. Equivalence Partitioning groups inputs into valid and invalid categories, reducing redundant test cases while maintaining effectiveness.
How to implement it:
1.	Identify input fields or functionality with distinct categories (e.g., login credentials).
2.	Group inputs into equivalence classes:
   Valid inputs (e.g., properly formatted email and password).
   Invalid inputs (e.g., incorrect email format, empty fields, incorrect password).
3.	Test one representative from each category to confirm expected behavior.
Related Testing Types:
  Unit Testing: For validating individual input handling logic.
  Acceptance Testing: To verify real-world user scenarios using valid and invalid


