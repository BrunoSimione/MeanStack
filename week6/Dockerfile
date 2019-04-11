FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Create an environmental variable
ENV NODE_ENV prod
ENV MONGO_INITDB_ROOT_USERNAME ''
ENV MONGO_INITDB_ROOT_PASSWORD  ''
ENV MONGO_INITDB_DATABASE products

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]