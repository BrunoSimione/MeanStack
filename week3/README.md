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

