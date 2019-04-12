const MongoClient = require("mongodb").MongoClient;
const DBName = "mydatabase";

const url = `mongodb://admin:secret@192.168.99.100:27017`;

const eletronicsData = [
    {
      brand: "Samsung",
      price: 1200.00,
      model: "TV 50 Turbo",
    },
    {
      brand: "LG",
      price: 750.10,
      model: "Soundbar XY4561",
    },
    {
      brand: "Sony",
      price: 850.20,
      model: "Home Theater",
    }
  ];

//connect call returns a connection promise, which can be 'then' with a callback
let connection = null;

MongoClient.connect(url)
  .then(con => {
    // <- callback
    console.log("Connected");
    connection = con;
    return con.db("mydatabase").dropDatabase();
  })
  .then(() => {
    return connection
      .db("mydatabase")
      .collection("eletronics")
      .insertMany(eletronicsData)
      .then(out => console.log(out));
  })
  .then(() => connection.close())
  .catch(err => {
    //if anything fails in the stack above, it will be caught here, stack stops
    console.log(err); //check for authentication fail?
  });