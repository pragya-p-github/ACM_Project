# ACM_Project

URL SHORTENER
=============

URL Shortener is a web application that allows users to shorten long URLs for easier sharing. It consists of a client-side interface built with React and a server-side component build using Node.js.

Mongoose is used to connect to the database and to create the Schema for URL object.

Node.js and Express.js are used to create the server and handle the requests.

Axios is used to make the requests to the server.

Most importantly shortid library is used for generating short and unique IDs for the shortened URLs.

CORS is used for establishing a middleware for all routes in the application, allowing requests from any domain.

Nodemon is used to maintain the workflow.



## How to start

After cloning the repository, follow these steps and commands in the terminal:

Change to the server directory using :

cd server 

Install the dependencies for the server using:

npm install

Start the server and establish the database connection using:

npm start

Open a new terminal or command prompt (while keeping the server running) and change to the client directory:

cd client

Install the dependencies for the client using:

npm install

Start the client application and run it on localhost using:

npm start


## Shorternurl

A form component that allows users to enter a long URL and an optional note. Upon submitting the form, it sends a POST request to the backend API to shorten the URL. The shortened URL is displayed once it is generated.

## Searchresults

A component that enables users to search for previously shortened URLs based on different criteria. It includes a search option dropdown, a keyword input field, and a search button. When the user performs a search, it sends a GET request to the backend API with the selected search criteria and keyword. The search results are displayed, including the shortened URL, the last clicked timestamp (if available), and a link to visit the shortened URL.


## API REQUESTS

The frontend communicates with the backend API to perform URL shortening and search operations. It uses the axios library to make HTTP requests.

Shorten URL: When a user enters a long URL and submits the form, a POST request is sent to the backend API with the URL and an optional note. The response contains the shortened URL, which is then displayed to the user.

Search URLs: When a user performs a search by selecting a search option and entering a keyword, a GET request is sent to the backend API with the selected criteria and keyword. The response contains the search results, which are displayed to the user.


## API Endpoints
The server exposes the following API endpoints:

POST /url: Generates a new short URL. Accepts a JSON payload with the url and note fields.

GET /url/analytics/:shortId: Retrieves analytics for a specific shortened URL based on its shortId.

GET /url/search: Searches for shortened URLs based on different criteria. Accepts query parameters keyword and option.


## Key Learnings

Creating RESTful APIs with Express and handling different HTTP methods.

Connecting to MongoDB database using Mongoose.

Performing CRUD operations (Create, Read, Update, Delete) on MongoDB collections.

Implementing URL shortening functionality and generating unique short IDs using the shortid library.

Retrieving and displaying analytics for shortened URLs, including total clicks and last clicked timestamp.

Implementing search functionality to filter and display URLs based on different criteria.
React components: The application is built using React.js, which provides a component-based architecture for building reusable UI elements.

State management with React Hooks: The useState hook is used to manage the state within functional components. It allows for storing and updating the state values.

Making HTTP requests with Axios: Axios is a popular library used for making HTTP requests. It is used in this application to send requests to the server to shorten URLs and search for URLs based on different criteria.

Sending data to the server: The application sends data to the server using HTTP POST requests to shorten the URL. The axios.post method is used to send the request along with the URL and optional note.

Retrieving data from the server: The application retrieves data from the server using HTTP GET requests to search for previously shortened URLs. The axios.get method is used to send the request with the search keyword and search option.

Displaying search results: The search results are displayed dynamically based on the search criteria. The retrieved data from the server is formatted and displayed using React components.



## Resourses

For Express.js and Node.js 
https://youtu.be/H9M02of22z4

For MongDB 
https://youtu.be/oSIv-E60NiU

For Mongoose
https://youtu.be/DZBGEVgL2eE

For MERN Stack 
https://youtu.be/7CqJlxBYj-M

