Building a React and React Native Application with Shared Resources

In this exercise, you will create a web React application and a React Native application that share core resources (API services, contexts, and hooks) within the same GitHub repository. The goal is to simulate an authentication request, access fake content, and display user information. You will use React Query for data fetching and Material-UI components for the web application. The focus is on code structuring, API integration, and managing shared resources effectively.

**Project Setup:**

1. Create a new GitHub repository for this project.
2. Set up two separate folders within the repository: one for the web application and another for the React Native application.

**Instructions:**

**Part 1: Shared Resources**

- Create a shared folder for core resources, which includes API services, contexts, and hooks.
- Implement an AuthenticationContext to manage user authentication state.
- Define an associated hook that exposes user information, authentication state, fetching state, login, and logout methods.

**Part 2: Web React Application**

- Set up a React web application using Create React App.
- Use Material-UI (MUI) components for the web interface.
- Create a login page with a form for email and password input.
- Implement the authentication request, which can either succeed or fail, using the AuthenticationContext.
- When the user logs in, display an avatar with their initials.
- Use React Query to fetch data from JSONPlaceholder for fake content, e.g., the last movies.
- Display the fetched content in an attractive MUI interface.

**Part 3: React Native Application**

- Create a React Native application.
- Implement a login screen with a similar design to the web application.
- Utilize the shared AuthenticationContext to manage authentication.
- Use React Query to fetch data from JSONPlaceholder for the same fake content.
- Display the fetched content in the React Native interface.
- Show the user's avatar with their initials upon successful authentication.

**Part 4: Repository Setup and README**

- Ensure that both the web and React Native projects can access the shared resources (contexts, hooks, and services) from the shared folder.
- Create a README.md file that provides clear instructions on how to run and test both applications.
- Include details on the shared resources, libraries used (React Query, MUI), and any additional setup required.

**Bonus:**

- Implement error handling for authentication and data fetching.
- Add unit tests using a testing framework of your choice (e.g., Jest, React Testing Library) to ensure the reliability of your code.

**Submission:**

- Share a link to your GitHub repository, which should include the web and React Native applications and any shared resources.
- Ensure your code is well-documented and easy to follow.
- Test both applications to ensure they work as expected.

This exercise is designed to assess your ability to structure a project, integrate third-party libraries, manage shared resources effectively, and build responsive user interfaces. It also evaluates your understanding of authentication flow and data fetching using React Query.
