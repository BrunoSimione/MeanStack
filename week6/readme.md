# Week 6 Assignment
## Monolithic API

First, we need to make sure that our persistent layer is running
```
docker run -it --name my-mongo \
    -p 27017:27017 \
	brunosimione/mydatabase
```

Then we need to create the API itself, using basically [models](https://oddlylabs.com/brunosimione/ITE5430/src/master/week6/models), [routes](https://oddlylabs.com/brunosimione/ITE5430/src/master/week6/routes), and [index.js](https://oddlylabs.com/brunosimione/ITE5430/src/master/week6/index.js).

We need to make sure that our API is 'pointing' to the correct path/layer:
```
const Document = require("../models/eletronic");
const router = express.Router();

router.get("/eletronics/all", (req, res, next) => {
  req.app.locals.db
    .collection("eletronics")
    .find({})
    .toArray((err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      if (result === undefined || result.length === 0) {
        res.status(400).send({ error: "No documents in database" });
      } else {
        res.status(200).send(result);
      }
    });
});
```

Finally, we should set our [.env](https://oddlylabs.com/brunosimione/ITE5430/src/master/week6/.env) to the correct parameters:
```
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=secret
MONGO_INITDB_DATABASE=mydatabase
MONGO_DATA_DIR=/data/db
MONGO_TEST_DATA_DIR=/data/test_db
MONGO_LOG_FILE=/var/log/mongodb/mongodb.log
PORT=80
```

Now that our API is ready, we can dockerize it and run:
```
docker build -t brunosimione/node_monolithic_api .
docker run --link my-mongo:my-mongo -p 80:80 -d brunosimione/node_monolithic_api
```

Now we can test our API using the link http://192.168.99.100/api/eletronics/all