# Blogspace

## Table of Contents
1. [**General Info**](#general-info)
2. [**Backend Technologies Used**](#backend-technology-used)
3. [**Frontend Technologies Used**](#frontend-techlogy-used)
4. [**Setup**](#setup)
5. [**Features**](#features) 
6. [**Code & Snippets**](#CodeSnippets)

## General Info
Blogspace is a blogging platform built with modern web technologies, offering a dynamic and interactive experience for both writers and readers. It provides a platform for users to create, share, and engage with blog posts on various topics. Blogspace utilizes the SERN stack (MySQL, Express.js, React, Node.js) for its architecture.

## Backend Technologies Used:

# Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling building scalable and efficient web applications.

# Express.js
Express.js is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and HTTP utilities.

# MySQL
MySQL is an open-source relational database management system. It is used to store and manage blog posts, user profiles, comments, and other relational data in this application.

# Axios 
Promise-based HTTP client for making API requests.

# Bcryptjs 
Library to help hash passwords securely.

# Cookie-parser
Middleware to parse cookies attached to the client request object.

# Cors
Middleware for enabling CORS (Cross-Origin Resource Sharing) to enable data sending between the two ends.

# JsonWebToken 
JSON Web Token (JWT) implementation for authentication and authorization.

# Multer
Multer is a middleware for handling multipart/form-data, primarily used for uploading files in Node.js applications.

# Nodemon
Nodemon is a utility that monitors changes in your Node.js application and automatically restarts the server.

## Frontend Technologies Used:

# HTML
HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure for web content.

# JavaScript
JavaScript is a programming language that enables interactive and dynamic features on web pages. It's commonly used for client-side scripting and interacting with web content.

# React
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.

# React Router
React Router is a routing library for React applications. It enables navigation and rendering of different components based on the URL.

# React-quill
React component for the Quill rich text editor.

# React-Router-Dom
Declarative routing library for React.

# SASS
CSS extension language that adds nested rules, variables, mixins, and more.
 
## Setup

- Clone the repository: git clone https://github.com/your-username/Blogspace.git

- Navigate to the project directory: cd restaurant-finder

- Install backend dependencies: npm install
 
- Install frontend dependencies: cd client && npm install

- Start the development server: npm start

- Open your browser and go to http://localhost:3000 to view the website.

- Set up MySQL:
  Create a database named blogspace.
  Update the database configuration in the config file with your MySQL username, password, and database details.

## Features

Blog Posts:

MySQL stores blog posts, including titles, content, categories, and images. Express.js defines endpoints for creating, retrieving, updating, and deleting blog posts, while React components display the blog post information.

Comments and Interactions:

MySQL stores comments and user interactions associated with blog posts. Express.js defines endpoints for adding and retrieving comments, while React components handle the display and interaction with these elements.

Search and Filter:

MySQL supports searching and filtering of blog posts based on various criteria such as author, category, and date. React components provide a user interface for searching and filtering blog posts.

# Code & Snippets: 
## Backend Code Snippets:

## Frontend Code Snippets:
