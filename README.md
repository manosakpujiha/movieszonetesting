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