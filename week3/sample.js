const MongoClient = require("mongodb").MongoClient;
const DBName = "products";

const url = `mongodb://192.168.99.100:27017/${DBName}`;


const eletronicsData = [
  {
	brand: "Samsung",
	price: 1200.00,
	model: "TV 50 Turbo",
	tags: ["TV", "LG", "SMARTV"],
	description: {
		height: "80cm",
		weight: "120cm"
	}
  },
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
  },
  {
	brand: "Sony",
	price: 850.20,
	model: "Home Theater",
	tags: ["HOME THEATER", "SONY", "SOUND"],
	description: {
		height: "20cm",
		weight: "50cm",
		depth: "20cm",
		watts: "75"
	},
	warranty:"2 Years"
  }
];

//connect call returns a connection promise, which can be 'then' with a callback
MongoClient.connect(url)
  .then(con => {
	// <- callback
	console.log("Connected");
	return con
	  .db("products")
	  .collection("eletronics")
	  .insert(eletronicsData)
	  .then(out => console.log(out))
	  .then(() => con.close());
  })
  .catch(err => {
	//if anything fails in the stack above, it will be caught here, stack stops
	console.log(err); //check for authentication fail?
  });
