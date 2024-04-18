# Krikey Coding Challenge 

This repo contains the code for the Krikey coding challenge completed by Tina Nemati.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to get started with this repository](#how-to-get-started-with-this-repository)
- [How to run](#how-to-run)
- [Deployed Application](#deployed-application)

## Overview

Created a static React webpage that connects to an endpoint, allowing users to fetch the top 10 authors by querying the database. Employed Node.js (Express), React with Vite, and a PostgreSQL database to ensure seamless operation locally. Deployed the application using Firebase to host the server, Supabase ORM for effortless database hosting, and Netlify to host the complete React application online.

## Features

- **SQL Queries**: Wrote SQL queries to analyze data in a relational database such as PostgreSQL.
  - Tested the queries by creating and hosting a local database, inserting dummy data and running the queries to check the output. 
  - The file containing these queries can be found at [SQL-queries.sql](./SQL-queries.sql).
- **API Endpoint**: Created a flexible and robust API endpoint that retrieves data from a PostgreSQL database and handles various scenarios, such as querying for specific authors or fetching the top 10 performing authors.
  - Set up an Express server to handle HTTP requests.
  - Defined a route for the API endpoint that accepts an optional query parameter called author_name.
  - Connected the server to a PostgreSQL database using the pg library.
  - Implemented logic to construct and execute SQL queries based on the presence of the author_name parameter.
  - Utilized error handling to return appropriate HTTP status codes and error messages if the provided author name is invalid or if there's an internal server error.
- **API Performance**: Utilized `NodeCache` and Rate limiting methods to optimize the performance of api endpoint for an estimated traffic of 1000 simultaneous users concurrently. 

*The relevant code for api endpoint & performance can be found at `local_dev` branch under the server directory*
- **React webpage**: 
  - Enhanced the UI features of the application using CSS to closely match the provided design. 
  - Leveraged the `axios` package in Node for efficient and streamlined data fetching from the backend.     
    - The relevant code for data fetching can be found under the services directory in the src folder [here](./src/services/api.ts).

- **Web Application Deployment**: 
  - Transitioned from utilizing a local database to hosting on Supabase, leveraging its real-time data synchronization and user-friendly interface.
  - Integrated configurations to link my Express server with the Supabase database and began fetching data via various methods on table references.
  - Established a Firebase project, configuring it to receive responses from its endpoint instead of localhost.
  - Created a firebase project and adding the configurations needed to reciece respond from this endpoint rather than localhost. 
  - Successfully deployed the Firebase project and connected the React frontend application to retrieve data from this endpoint.
  - Developed a Netlify application within the project's main directory, defining build configurations, establishing deployment processes via GitHub, and ultimately deploying the static web application. 

*The relevant code for backend application hosted on firebase can be found on the following repository [here](https://github.com/tinanemati/krikey-firebase-server.git)*

## How to Get Started with This Repository

The code in this repository has been separated into two branches to distinguish between production and development environments:

- To access and run the code used during development, navigate to the `local_dev` branch in this repository.

- For the server API endpoint used in production, please refer to the [following repository](https://github.com/tinanemati/krikey-firebase-server.git) where you can find detailed instructions and documentation on how the code operates.

- To review the code used in the final development phase, you can switch to the main branch of this repository.

## How to run
1. Clone this repository using HTTPS or SSH
   ```sh
   git clone https://github.com/tinanemati/kirkey.git
   ```
   or
    ```sh
   git clone git@github.com:tinanemati/kirkey.git
   ```
2. Create a new local branch called `local_dev`
   **This will be the branch you will be using to run and host the application locally**
3. Navigate to your new created branch 
   - you can run the command `git branch -a` to list all the branches and then using `git checkout local_dev`navigate to your newly created branch
4. Pull the changes from the `local_dev` branch to get the code used for local development.
  **Accepts incoming changes to resolve any conflict between branches**
    ```sh
   git pull origin local_dev
   ```
5. navigate to "./server/db.js" and update the configiguraons of postgress data base to your own local data base. 
6. navigate back to the main directory of the project and install the required dependencies using 
`npm install` 
7. After the installation is complete, run `npm run dev` to start the development server
  - this command will authomatically start the node.js server as well, hosted at port 8080. 
8. Open your web browser and navigate to [https://localhost:5173](https://localhost:5173) to view the top 10 authors.

## Deployed Application

The application is deployed on the web using netlify, firebase and supabase and can be viewed [here](https://deploy--krikeychallengetina.netlify.app/).

