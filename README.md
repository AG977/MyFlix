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

##  *Optional Features:*
1. Allow users to see which actors star in which movies
2. Allow users to view information about different actors
3. Allow users to view more information about different movies, such as the release date and the movie rating
4. Allow users to create a “To Watch” list in addition to their “Favorite Movies” list

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
