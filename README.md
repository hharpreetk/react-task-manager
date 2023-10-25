# Task Manager

This is a simple task manager application built using React. It allows you to create, manage, and organize your tasks effectively. Below, you'll find information about the project structure and how to run the application.

## Project Structure

The project structure is organized as follows:

``````
└─ src
   ├─ components
   │  ├─ AppContent.js
   │  ├─ CompletedTasks.js
   │  ├─ Droppable.js
   │  ├─ Menu.js
   │  ├─ Navbar.js
   │  ├─ SearchInput.js
   │  ├─ Task.js
   │  ├─ TaskDisplay.js
   │  ├─ TaskEdit.js
   │  ├─ TaskInput.js
   │  ├─ TaskList.js
   │  └─ ThemeSwitcher.js
   ├─ contexts
   │  ├─ SearchQueryContext.js
   │  ├─ TasksContext.js
   │  └─ ThemeContext.js
   ├─ App.js
   ├─ index.js
   ├─ index.css
``````

## Getting Started

### Prerequisites

Node.js and npm should be installed on your machine.

### Installation 

Follow the steps below to run the Task Manager React Application:

 **1. Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

**2. Navigate to the Project Directory:**

   ```bash
   cd task-manager-react-app
   ```

**3. Install Dependencies:**

   ```bash
   npm install
   ```

**4. Run the Application:**

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Built With

List the technologies, libraries, and frameworks used in the project.

- [React](https://reactjs.org/)
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd)

## Features

* Add, edit, and delete tasks.
* Mark tasks as completed.
* Search for tasks using a search bar.
* Reorder tasks using drag-and-drop functionality.
* Toggle between light and dark themes.
* Responsive design for different screen sizes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.