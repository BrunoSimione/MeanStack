# Week 11 Assignment
## Docker-Compose

We will use the docker-compose to create a launch automation. This will launch the containers needed for the application, in the correct order, following the dependencies.

We basically will create the [docker-compose](https://oddlylabs.com/brunosimione/ITE5430/src/master/week11/docker-compose.yml) to handle all the launch automation logic:

```
version: "3"
services:
  my-mongo:
    build: ./database
    image: "brunosimione/mydatabase"
    ports:
      - "27017:27017"
  my-api:
    build: ./api
    depends_on:
      - my-mongo
    image: "brunosimione/node_monolithic_api"
    ports:
      - "80:80"
  frontend:
    build: ./frontend
    depends_on:
      - my-mongo
      - my-api
    links:
      - my-api
    image: "brunosimione/frontend"
    ports:
      - "3000:3000"
```

And to build the docker-compose:
```
docker-compose build --force-rm
```

And then, we run the automation:
```
docker-compose up
```

We can check all tiers running at `localhost:3000`

To shutdown the services and perform cleanup tasks:
```
docker-compose down
```

## Concurrency



```
const persistentConnect = () => {
  MongoClient.connect(url, options, (err, database) => {
    if (err) {
      console.log(`FATAL MONGODB CONNECTION ERROR: ${err}`);
      console.log(`FATAL MONGODB CONNECTION ERROR STACK: ${err.stack}`);
      setTimeout(persistentConnect, 5000);
    }else{
      app.locals.db = database.db("mydatabase");
      http.listen(port, () => {
        console.log("CORS enabled Listening on port " + port);
        app.emit("APP_STARTED");
      });
    }
  });
};
```

In this example, the client attempts to connect, but if it fails it waits for five seconds, then attempts to connect again until it finally succeeds.

In this manner the service keeps running even if the other tier drops out.