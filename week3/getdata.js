const MongoClient = require("mongodb").MongoClient;
const DBName = "products";

const url = `mongodb://192.168.99.100:27017/${DBName}`

MongoClient.connect(url, (err, client) => {
    if (!err) {
      console.log("Connected successfully to server");

      const db = client.db(DBName);
      findProducts(db, result=>{
		  console.log(result);
	  });
      }
    } 
);

const findProducts = (db, callback)=>{
		const collection = db.collection("eletronics");
		collection.find({"brand":"LG"}).toArray((err, docs)=>{
			if(!err){
				console.log("Found these records");
				callback(docs);
			}else{
				callback(err);
			}
		})
}