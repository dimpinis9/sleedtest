Task Manager Application
A Task Manager Application built with React, designed to help users manage and organize their tasks seamlessly. This document outlines how to set up and run the project locally, libraries/tools used, architectural decisions, optimizations, limitations, and potential future improvements.

How to Set Up and Run the Project Locally

1. Prerequisites
   Ensure you have the following installed on your machine:

Node.js (v14 or higher)
npm or yarn (package managers) 2. Clone the Repository

git clone https://github.com/dimpinis9/sleedtest.git
cd task-manager 3. Install Dependencies
Use your package manager of choice to install the required packages:

npm install

# or

yarn install

4. Start the Development Server
   Run the following command to start the application:

npm start

# or

yarn start

The application will run locally at http://localhost:3000.

Libraries and Tools Used

1. React

Used to build the UI components.
Chosen for its flexibility, component-based architecture, and wide ecosystem.

2.  Redux

Used for state management, ensuring a single source of truth for application state.
Simplifies debugging and state tracking.

3. React DnD

Enables drag-and-drop functionality for reordering tasks.
Lightweight and customizable for this feature.

4. CSS

Used for styling components, ensuring responsiveness and a clean design.

Architectural Decisions and Optimizations

1. Component-Based Architecture

The app is modular, with reusable components, making it scalable and easy to maintain.
Examples:
TaskList: Manages and displays lists of tasks (e.g., Active or Completed).
TaskForm: Handles adding new tasks.

2. State Management
   Redux ensures a centralized and predictable state across the app.

3. Drag-and-Drop
   Integrated React DnD for efficient drag-and-drop operations while minimizing rerenders for performance.

4. Custom Hooks

useFetch: Centralized API logic for fetching and managing task data, promoting code reuse and better abstraction.

Limitations and Future Improvements

Limitations

Data Persistence

Tasks are currently stored only in the Redux state. This means they are lost upon a page reload.
Limited Features

The app currently does not include task prioritization or due dates.
Basic UI

Though functional, the user interface lacks advanced animations or accessibility enhancements.
Future Improvements

Persistent Storage

Add local storage or connect to a backend API for saving tasks persistently.
Enhanced UI/UX

Introduce animations for smoother interactions.
Add accessibility improvements for better usability.
Advanced Features

Task prioritization, due dates, and notifications.
Implement drag-and-drop task prioritization across categories.
Real-Time Updates

Enable real-time synchronization using WebSockets or similar technology.
Search Optimization

Add debounce to the search functionality for smoother performance with large task lists.

Tests and Coverage
Test Suites
Comprehensive test cases for the app's core functionality have been written using Jest. These tests validate the following:

Task addition, deletion, and filtering.
State management (Redux selectors and actions).
API fetching using useFetch.
Component rendering and behaviors (e.g., theme toggle, drag-and-drop).

Test Coverage Report
The current coverage of the project is as follows:

-------------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------
All files | 25 | 0 | 16.66 | 25 |
src | 0 | 0 | 0 | 0 |
App.js | 0 | 0 | 0 | 0 | 7-14
jest.config.js | 0 | 100 | 100 | 0 | 1
src/components | 0 | 0 | 0 | 0 |
TaskManager.js | 0 | 0 | 0 | 0 | 18-95
src/hooks | 10.52 | 0 | 0 | 10.52 |
useFetch.js | 10.52 | 0 | 0 | 10.52 | 6-33
src/tests/helpers | 79.16 | 100 | 50 | 85 |
mockHooks.js | 76.19 | 100 | 44.44 | 82.35 | 8-9,14
mockStore.js | 100 | 100 | 100 | 100 |
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 3 passed, 3 total
Tests: 4 passed, 4 total
Snapshots: 0 total
Time: 4.302 s

Conclusion
This project highlights key principles of modern React development, such as reusable components, efficient state management with Redux, and optimized interactions like drag-and-drop. With further improvements, it can become a robust and feature-rich task management solution.

Contact
Author: Dimitris Pinis
Email: dimpinis9@gmail.com
GitHub: https://github.com/dimpinis9
