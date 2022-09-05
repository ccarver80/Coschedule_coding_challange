# Coschedule_coding_challange

# Built using React and Express 
### Other packages include:
- Sequelize for connecting to a database
- Tailwind CSS for design
- Bcrypt - encrypting users data
- SQLite - lightweight database for testing
- Nodemon - Auto reset server anytime change is detected
- Node-Fetch - To make fetch requests from the server


## Watch Youtube Tutorial
- [Youtube Tutorial](https://www.youtube.com/watch?v=uWZniYoqVd0)

## Steps to run Application

1. Clone repo at https://github.com/ccarver80/Coschedule_coding_challange.git
2. Inside .env file, *GIPHY_API_KEY=ADD YOUR GIPHY API KEY HERE* add your GIPHY api key from www.developers.giphy.com
3. Open Terminal and CD into api folder
4. run command ``` npm install ```
5. run command ``` npm start ``` 
6. Open Second terminal and CD into client folder
7. Repeat steps 3 & 4
8. A new browser should appear with app running


## Instructions for running application
1. You can create an account by clicking the "Create New Account" button on sign in page
2. On the main home page once logged in you can click **Search Gifs** to search for your favorite gif.
3. Click "Add to favorites" and it will be added to your favorites below.
4. Feel free to rate each gif and add a personal comment on why its your favorite.



## Log
- **Aug 29th, 2022:** Started project by building repo, Created front end with "Create-React-App", and started backend with "Express Generator". Installed Tailwind, and configured for design. Built login and sign up routes. Installed sequelize on backend and created user model. Created SQLite database to store info for users. Built user authentication to login and sign up successful. Need to build in some features to for wrong username or password, and make user friendly. 

- **Aug 30th, 2022** Added custom error messages to user sign up and login for error handling. Updated users model to so username must be unique on database, and at least 5 characters. Downloaded node-fetch and made a simple call on node side to https://catfact.ninja/fact for testing purposes and was able to fetch data from server and serve it back to client successfully. 

- **Sept 1st, 2022** Set up Giphy Api app, got custom api_key and built search bar fetch request on server. Added button for search results to "add to favorites".  Built "Gif" model for database, added associations for each gif has one user, but each user has many gifs. 

- **Sept 4th, 2022** Built rating function and comment for each gif. Made a bunch of design changes