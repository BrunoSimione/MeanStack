# Week 5

## Backend
We created a simple node file to populate de database.

## Service

Similar as the week3 assignment, we created an small node application/micro service that exposes some functions (GET, POST, PUT, DELET).

Summary of the step-by-step to create the node API (more details at week3 assignment)
````
1) npm init
2) npm install mongodb --save
3) Update package.json with dependencies and plugins
4) Create the files lib/index.js and the run.js
5) npm run build
6) npm start   (to run the service)
````

## In this case, we will create a **dockerized node app**:

### Create Dockerfile

Inside the *serivce* folder:
````
touch Dockerfile
````

And we will edit the file to the following:

````
FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
````

### File .dockerignore

````
touch Dockerfile
````
This file is similar as .gitignore. We can basically specify which file/folders we do not want to be copied. In this cases, the node files/folders:

````
node_modules
npm-debug.log
````

### Creating the dockerized app

From the same folder of the Dockerfile:
````
docker build -t brunosimione/node-web-app .
````

This will use the parameter set in the Dockerfile to create a new docker image.
We can check the images using:
````
docker images -a
````

Extra - To remove an image, we should use:
````
docker rmi <image>
````

### Create and Connect the new container 
*Before the run the following steps, we must make sure that we have a running mongodb container*
````
docker run -it -p 27017:27017 --name my-mongo mongo:3.4.18-jessie
````

Creating the new container:
````
docker run --link my-mongo:mongo -p 8080:8080 -d bruno-simione/node-web-app
````

And finally we can test if verything worked:
````
curl -X GET http://192.168.99.100:8080 -d '{"brand":"LG"}'
````

Obs: We need to make sure that the IP is the same of the Docker. To check that we can use the command `docker-machine env`

### Summary:

Basically what is happening:

1. We send a curl GET command to the IP/port http://192.168.99.100:8080 (used by the Docker network)
2. The run.js file is listening the port 8080, so it captures the command and send it to the index.js file.
3. The index.js file interpret the message and do a callback to the specified function (in this case, the GET function) connecting to the Mongodb container using the port 27017.
4. The answer go all the way back and it is prompted on the terminal.