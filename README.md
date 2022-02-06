#  **Cheatsheet: JavaScript App (MyFlix)**

#  **MyFlix**

##  *Goals:*
To build the server-side component of a “movies” web application. The web application will provide users
with access to information about different movies, directors, and genres.

##  *User Goals:*
Users will be able to sign up,
update their personal information, and create a list of their favorite movies.

##  *Key Features:*
1. Return a list of ALL movies to the user
2. Return data (description, genre, director, image URL, whether it’s featured or not) about a
   single movie by title to the user
3. Return data about a genre (description) by name/title (e.g., “Thriller”)
4. Return data about a director (bio, birth year, death year) by name
5. Allow new users to register
6. Allow users to update their user info (username, password, email, date of birth)
7. Allow users to add a movie to their list of favorites
8. Allow users to remove a movie from their list of favorites
9. Allow existing users to deregister

##  *Requirements:*
1.  The API must be a Node.js and Express application.
2.  The API must use REST architecture, with URL endpoints corresponding to the data
    operations listed above
3.  The API must use at least three middleware modules, such as the body-parser package for
    reading data from requests and morgan for logging.
4.  The API must use a “package.json” file.
5.  The database must be built using MongoDB.
6.  The business logic must be modeled with Mongoose.
7.  The API must provide movie information in JSON format.
8.  The JavaScript code must be error-free.
9.  The API must be tested in Postman.
10. The API must include user authentication and authorization code.
11. The API must include data validation logic.
12. The API must meet data security regulations.
13. The API source code must be deployed to a publicly accessible platform like GitHub.
14. The API must be deployed to Heroku.

##  *How to run this project:*
1. Requires MongoDB
2. Should use a local MongoDB server
3. Create your Database

##  *How to navigate on the API:*
First you will have to create a new user, then LOGIN. Once Login has been done you shall be given a Bearer Token, copy this, as this will be you're authorization token that you will need to use in order to make any request from the endpoints (Table below). Enjoy!

##  *Endpoints used in this project:*
| Request                   |    URL                         |Method |    Request body     |               Response body                               |
|        :---:              |    :---:                       |:---:  |       :---:         |                    :---:                                  |
| Get a list of Movies      |  /movies                       | GET   |   None              |  A Json object holding data about all the Movies          |
| Get a list of Users       |  /users                        | GET   |   None              |  A JSON object holding data about all the Users           |
| Get Movie by title        |/movies/:title                  | GET   |   None              |  A JSON object holding details about a movie              |
| Get data about genre      |/movies/genre/:genreName        | GET   |   None              |  A JSON object holding data about the genre               |
|Get data about a Director  |/movies/directors/:directorName | GET   |   None              |  A JSON object holding data about a single Director       |
|Get a User by Username     |/users/:Username                | GET   |   None              |  A JSON object holding data about a single User           |
|Add a user                 |/users                          | POST  |JSON with users info |  A Jason object holding data about the user that was added|
|Update user's info         |/users/:Username                | PUT   |   None              |  A Jason object holding updated information about User    |
|Add movie to favorites     |/users/:Username/movies/:MovieID| POST  |Json with update info|  Success Message                                          |
|Remove movie from favorites|/users/:Username/movies/:MovieID| DELETE|   None              |  Success Message                                          |
|Delete user by Username    |/users/:Username                | DELETE|   None              |  Success Message                                          |
