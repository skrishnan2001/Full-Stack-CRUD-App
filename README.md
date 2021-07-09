# Task : Create a basic crud app which performs basic CRUD operations on a user
You are expected to use React for the FrontEnd & Django for the backend.

## Frontend
Your app should be a Single Page Application with the following features.
1. A landing page with a signup and login form.
2. After login you should see a list view of all the users that are created.
3. If you are an admin you can perform delete user tasks.
4. All users can update their details using a widget.
5. Each user should be clickable i.e you should be able to view the details once clicked in a
separate route.

## Backend
The attributes for a user:<br/>

- id : integer
- email : String
- password : String
- role : boolean
- name : String

### The endpoints for the app 
1. Create a user `POST /user` this endpoint should be used to create a new user and takes
the user schema apart from id attribute as a JSON in the request body.
2. Get list of users `GET /user` this endpoint returns a list of users that exists in the system.
3. Get a single user `GET /user/<id>` this endpoint returns the details of a specific user.
4. Update a user `PUT /user/<id>` this endpoint is used to update a user's details.
5. Delete a user `DELETE /user/<id>` this endpoint is for deleting the user.
6. Create a login token `POST /login` this endpoint logs the user in and returns a token for
successful login. The token is used to authenticate requests.
<br/>
All attributes(except id) are mandatory for the user schema.
Apart from the POST /user all endpoints require authentication i.e. they can only be accessed
by a user that is signed in. <strong>The DELETE /user endpoint also requires authorization as only an admin can delete a user.</strong>
<br/>
<br/>
The state of the app i.e. the user details etc needs to be stored in a postgres database. You are
expected to use containerized databases for development & testing environments.
Please use the following image for postgres <strong>postgres:13.3-alpine</strong>

### Here are the basic response codes that are expected.
1. 401 for all unauthorized users.
2. 201 for successful POST call.
3. 200 for successful GET & PUT calls.
4. 204 for successful DELETE call.
5. 404 for not found routes and/or not found resources in GET, PUT & DELETE calls.
6. 400 when the request body is not in the correct format in POST & PUT.
7. 422 when the content-type is not <strong>application/json</strong> and/or any other mime type is
requested from the server.

<br/><br/>
Your server should be deployable along with all its dependencies as a docker container.
Please use the following base image to build your container `python 3.8.10-slim`
<br/>
<br/>
You are expected to implement a CI/CD pipeline using GitLab CI. CI/CD Pipeline to be built using Gitlab CI:
- <strong>Lint</strong>: Check for Code Style and Formatting
- <strong>Build</strong>: Builds the docker-image for the django-app and PostgreSQL

## How to run this project?
1) Clone this repository using the command `git clone https://github.com/skrishnan2001/Full-Stack-CRUD-App.git` in git-bash or any other terminal.
2) Make sure you have docker-desktop installed. If not, download it from Docker's official website.
3) Open the root directory of the project and type the following commands:
- `docker-compose build` : Builds the image for django and postgreSQL
- `docker-compose up` : Sets up the docker container for the CRUD App
4) That's it!! You have the project setup ready in your PC.
5) To test the project, type `http://localhost:8000` in the browser and run the full-stack web application.

### To check the CI/CD pipeline, checkout my GitLab repo of the same project
Link : https://gitlab.com/skrishnan2001/CRUD-App



