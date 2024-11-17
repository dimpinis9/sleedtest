Task Manager Application
A Task Manager Application built with React, designed to help users manage and organize their tasks seamlessly. This document outlines how to set up and run the project locally, libraries/tools used, architectural decisions, optimizations, limitations, and potential future improvements.

🚀 How to Set Up and Run the Project Locally

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

Conclusion
This project highlights key principles of modern React development, such as reusable components, efficient state management with Redux, and optimized interactions like drag-and-drop.
