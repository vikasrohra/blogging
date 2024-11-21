## STARTUP KIT

1.  Create a project folder and open it in a VS Code Editor

2.  Create `client` and `server` folders inside it

3.  Open 2 terminals as we are going to build 2 different applications `client` and `server`

4.  In the first terminal type `cd client` to go inside the client directory

5.  Initialize empty React application by typing `npx create-react-app ./`, will initialize a React app without the project name

6.  While the client app is initializing, create an `index.js file` inside the server folder (starting point of our server application)

7.  In the second terminal type `cd server` to go inside the server directory

8.  Type `npm init -y`, to initialize an empty `package.json` file

9.  Install server dependencies

    - `npm install body-parser cors express mongoose nodemon`

10. To use latest JS `import-export`, we need to add `"type": "module",` below ` "main": "index.js",` to enable it.

11. To create a nodemon script to run the app using nodemon, add `"start": "nodemon index.js`

12. Once React app is initialized, we'll install client dependencies


    - `npm install axios moment react-file-base64 redux redux-thunk`

13. Delete all the files inside src folder

14. Create the new `src` folder

15. Add `index.js` file to connect React with index.html file, add below code

```javascript
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
```

16. Create App.js file and finally run the client app with `npm start`

17. If everything works fine then create GitHub repository and connect it to the project

- git init
- git add .
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/vikasrohra/blogging.git
- git push -u origin main

18. Now stop the client app and first focus on setting up the server application



## Backend index.js setup and connect to the MongoDB server

1.  Initialize the express application in index.js and required middlewares

2.  Connect server application with the real database (MongoDB)

3.  Get the connection url from the MongoDB website

4.  Add that url in a constant

5.  Add a port number in a constant

6.  Pass connection string to the mongoose.connect object



## Adding routes, controllers and models

1. Create a folder inside server named as `routes` then add posts.js inside it

2. Create a folder called `controllers` then add posts.js inside it

3. Add a folder called `models` then add postBlog.js inside it

4. Adding more routes and controllers then move to the client side



## Frontend Design


### Material UI setup

1. Go to the Material UI website and follow the installation steps



### Added App Header



### Added Feed Page


### Configuring and using React Router
- Install a package `react-router-dom`


### Added Sign in page