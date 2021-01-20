# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev-install-dependencies`

This will install all the dependencies required for both frontend and backend. This is the first script to be run once the repository is cloned.

### `npm run start`

Runs the node backend in the development mode(without watch mode).\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run server`

Runs the nodemon in the development mode(with watch mode).\
Any changes to the backend files will immediately be reflected on server console.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser or on POSTMAN to see if server is running.

### `npm run client`

Runs the frontend which is created using the create-react-app CLI. if you run only frontend without running backend server then application will start but you will not see any results as the calls to api's will fail.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev`

Runs both backend and frontend server using concurrently.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `How does app work`

when both frontend and backend servers are up and running, Go to [http://localhost:5000](http://localhost:5000) to view it in the browser and wait for api calls to succeed. You will see a loading indicator for 2 secs (max). Once the search field is available, search for the bitcoin you want to search by its name or by code. You will see the results in nice cards. Each card will have description about the cryptocurrency you searched for and the rates will be displayed in EUR, AUD, BRL, USD and GBP.
