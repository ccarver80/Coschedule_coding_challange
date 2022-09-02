# Coschedule_coding_challange

# Built using React and Express 
### Other packages include:
- Sequelize for connecting to a database
- Tailwind CSS for design
- Bcrypt - encrypting users data
- SQLite - lightweight database for testing
- Nodemon - Auto reset server anytime change is detected
- Node-Fetch - To make fetch requests from the server

## Steps to run Application

1. Clone repo at https://github.com/ccarver80/Coschedule_coding_challange.git
2. Open Terminal and CD into api folder
3. run command ``` npm install ```
4. run command ``` npm start ``` 
5. Open Second terminal and CD into client folder
6. Repeat steps 3 & 4
7. A new browser should appear with app running


## Instructions for running application
1. You can create an account by clicking the "Create New Account" button on sign in page
2. Or, you can use the username "test123" and password "12345" to login real quick.


## Log
- **Aug 29th, 2022:** Started project by building repo, Created front end with "Create-React-App", and started backend with "Express Generator". Installed Tailwind, and configured for design. Built login and sign up routes. Installed sequelize on backend and created user model. Created SQLite database to store info for users. Built user authentication to login and sign up successful. Need to build in some features to for wrong username or password, and make user friendly. 

- **Aug 30th, 2022** Added custom error messages to user sign up and login for error handling. Updated users model to so username must be unique on database, and at least 5 characters. Downloaded node-fetch and made a simple call on node side to https://catfact.ninja/fact for testing purposes and was able to fetch data from server and serve it back to client successfully. 

- **Sept 1st, 2022** Set up Giphy Api app, got custom api_key and built search bar fetch request on server. Added button for search results to "add to favorites".  Built "Gif" model for database, added associations for each gif has one user, but each user has many gifs. 