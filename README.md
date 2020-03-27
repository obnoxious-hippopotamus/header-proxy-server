# header-proxy-server
Individual proxy server for the header micro service

# startup instructions

- Open 3 terminal tabs for each of the service repos

- FOR EACH SERVICE:
  - Navigate into the service directory and run the schema.sql file to make the DB.
  - Then run the seed script found on that services package.json
  - execute npm install for each window
  - In the 2nd tab, run the server start script from the package.json
  - In the 3rd tab, run the webpack script from the package.json

- Each of the services should be running from their own servers.

- In the proxy-server directory:
  - execute npm install
  - run the server start script from the proxy package.json
  
- The proxy server should be running

- Open a new tab in your browser and go to localhost:3000 to see the app.
  
