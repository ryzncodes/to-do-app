# MERN Stack To-Do List App

This is a simple to-do list application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows you to create, update, and delete tasks, helping you stay organized and manage your daily tasks efficiently.

## Features

- Create new tasks with titles and descriptions.
- Edit and update task details.
- Delete tasks when they are no longer needed.

## Technologies Used

- MongoDB: A NoSQL database for storing task data.
- Express: A backend framework for building the RESTful API.
- React: A JavaScript library for building the user interface.
- Node.js: A server-side runtime environment for running the application.
- Axios: A promise-based HTTP client for making API requests.
- Nodemon: A tool that automatically restarts the Node.js server during development.
- CSS: Used for styling the app.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

1. **Clone the repository:**

   ```bash
   git clone hhttps://github.com/ryzncodes/to-do-app
   cd to-do-app

2. **Install dependencies**

    ```bash
    cd frontend
    npm install

    cd backend
    npm install

3. **Configure environment variables**

    Create an .env file inside the frontend directory and add your MONGODB_URI

    MONGO_URI=your_mongodb_uri

4. **Start your server**

    In your backend directory, start the server by:

    ```bash
    npm start
    ```

    While in your frontend directory, start it by:

    ```bash
    npm start
    ```

## API Endpoints

- GET /: Get all tasks.
- POST /save: Save a new task.
- POST /update: Update a new task.
- POST /delete: Delete a task.