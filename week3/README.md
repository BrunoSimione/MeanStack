# *Part I*
# Install Node.JS
We need to download and install the **Node.js** from the website https://nodejs.org/en/

# Check Node.JS version
```
node -v
```

# Check Node.JS installation
Create a .js file just to check if Node.js is running properly

```
console.log('Hello Node!');
```

# Run the file
```
node index.js
```
If everything is ok, we will see the return of the program.
# MongoDB Installation/Dependencies
```
npm install mongodb
```
This command will install the mongodb and its dependencies 
After this, we will have a folder (node_modules) and a **package-lock.json**

# Package.json
```
npm install
```

This command will run the utility that helps in the package.json file creation

# *Glossary*
**NPM** -> Package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
https://www.npmjs.com/

# *Part II*

# Run MongoDB on Docker
We need to run the docker container containing the MongoDB that will wait for a Connection oh the specified port.


`docker run -it -p 27017:27017 --name my-mongo mongo:3.4.18-jessie`

In this case, the MongoDB will wait for a connectino on port 27017.

# Testing Connection
We changed the file index.js so we can test the connection with Node and MongoDB *(see file index.js)*


# Populate MongoDB
Create the file [sample.js](https://oddlylabs.com/brunosimione/ITE5430/src/week3/week3/sample.js) to populate the database.

# Checking Data and Connection
Run the file [getdata.js](https://oddlylabs.com/brunosimione/ITE5430/src/week3/week3/getdata.js) to check the data and connection with Node -> MongoDB

```
node getdata.js
```


# Create the micro service file
The file [run.js](https://oddlylabs.com/brunosimione/ITE5430/src/week3/week3/Assignment/run.js) contains the micro sevice that will listen to the specified port (in this case :3000) and will link with the lib folder containing the API.

# Create the API routes file
The file [lib/index.js](https://oddlylabs.com/brunosimione/ITE5430/src/week3/week3/Assignment/lib/index.js) contains the API routes for GET, POST, UPDATE, and DELETE.

# Package.json
If it is a new folder, you need to run the installation again:

```
npm install mongodb
```

This will create the [package.json](https://oddlylabs.com/brunosimione/ITE5430/src/week3/week3/Assignment/package.json) file. We need to update de plugins and dependencies to include the **Babel**.

# Build the application

```
npm run build
```
This will create the /dist folder with the [index.js](https://oddlylabs.com/brunosimione/ITE5430/src/week3/week3/Assignment/dist/index.js) file.
# Run the micro service
```
npm start
```

# Send commands to micro serice
Open a new command terminal and run the CRUD commands, for example:
```
curl -X GET http://localhost:3000 -d '{"brand":"LG"}'
```

Return:

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   204  100   190  100    14   4042    297 --:--:-- --:--:-- --:--:--  4340[{   "_id":"5c59cfc0b9598c2c4057da60","brand":"LG","price":750.1,"model":"Soundbar XY   4561","tags":["SOUNDBAR","LG"],"description":{"height":"20cm","weight":"75cm","d   epth":"20cm","watts":"50"}}]
```