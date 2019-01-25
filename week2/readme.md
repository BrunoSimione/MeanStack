# Week 2 Assignment

### Installing Image and Launching Container

The easiest way to install a Mongo image is running the following command:

`docker run --name my-mongo -d mongo:3.4.18-jessie`

### Run the Mongo Client container

`winpty docker run -it --link my-mongo:mongo --rm mongo mongo --host mongo test`

*When using Windows, we may need to use the command `winpty` to ensure that the console uses TTY*

After this, we are "inside" the container running the MongoDB and can use Mongo commands.

### Extra: Starting Mongo Server
To enter into interactive mode in a running container, we need to run the following command in a new terminal:

`docker exec -it my-mongo bash`

*However we shouldn't use the same container as both the server and client, since this can cause some problems in the future*

### Inside MongoDB:

### Create DB

`use products;`

### Create an user

```
use products;
db.createUser({user:"user1", pwd:"123123", roles:[
    {
        role:"dbOwner",
        db: "products"
    }
]})
```

Then switch to the new user:

```
use products
db.auth("user1","123123")
```

### INSERT command
```
db.eletronics.insert(
    {
        brand: "Samsung",
        price: 1200.00,
        model: "TV 50 Turbo",
        tags: ["TV", "LG", "SMARTV"],
        description: {
            height: "80cm",
            weight: "120cm"
        }
    }
)


db.eletronics.insert(
    {
        brand: "LG",
        price: 750.10,
        model: "Soundbar XY4561",
        tags: ["SOUNDBAR", "LG"],
        description: {
            height: "20cm",
            weight: "75cm",
	    depth: "20cm",
	    watts: "50"
        }
    }
)
```

### FIND Command
```
db.eletronics.find({brand: "LG"})
db.eletronics.find({price : {$gt:1000}})
```


### UPDATE command
`db.eletronics.update({brand:"LG",model: "Soundbar XY4561"}, {price: 750.10}, {upsert:true} )`