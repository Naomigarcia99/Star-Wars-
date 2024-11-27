# Star Wars
Sprint 7. Interactive web application where users can explore Star Wars starships. Users need to log in or register to view a list of starships and access detailed information about each one.

## Introduction
This project is an interactive web application developed with React that allows users to explore starships from the Star Wars universe. Users must register or log in to access the starship list and view detailed information about each one. The system uses Redux for state management and Tailwind CSS for a modern, responsive design.

## Key Features
- Secure registration and login using Firebase.
- Interactive list of starships with detailed information.
- Protected routes: Only authenticated users can access certain sections.
- Attractive design, optimized for mobile devices.
- SWAPI: Public API that provides data about the Star Wars universe.

## Requirements
Before running the project, make sure you have the following prerequisites installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **React** (compatible versions with the code)
- **React Router DOM** (v6 or higher)
- **Tailwind CSS** (version 2 or higher)
- **Firebase** For user registration and login.
- Modern browser (Google Chrome, Firefox, etc.)

## Installation
### 1. Clone the repository
First, clone the repository to your local machine:
```bash
 git clone https://github.com/Naomigarcia99/Star-Wars-.git
 cd Star-Wars-
```
### 2. Create a Firebase project:
To use Firebase for user registration and login, you'll need to configure your own.

- Firebase credentials:
Go to the Firebase Console.
Create a new project and follow the setup steps.

- Get Firebase credentials:
In the Firebase project settings, go to "Your Apps" and select "Web" to get your Firebase configuration.

- Update Firebase credentials in your project:
Replace the existing Firebase credentials in your project (e.g., in credentials.js or firebase.js) with the new ones you copied.

- Install Firebase dependencies: If you haven't installed Firebase yet, run:
```bash
  npm install firebase
```

- Run the app.

### 3. Install the dependencies
Make sure you have npm installed and run the following command to install the necessary dependencies:
```bash
 npm install
```

### 4. Run the aplication
To start the application, use the following command:
```bash
 npm run dev
```

This will start the development server and open the application in your default browser. You should now be able to see the application running and explore the Star Wars starships.
