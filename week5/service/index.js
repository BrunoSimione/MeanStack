const MongoClient = require("mongodb").MongoClient;
const DBName = "entertainment";

const url = `mongodb://192.168.99.100:27017/${DBName}`

MongoClient.connect(url, (err, client) => {
    if (!err) {
      console.log("Connected successfully to server");

      const db = client.db(DBName);
      findTravolta(db, result=>{
		  console.log(result);
	  });
      }
    } 
);

const findTravolta = (db, callback)=>{
		const collection = db.collection("actors");
		collection.find({"firstName":"John"}).toArray((err, docs)=>{
			if(!err){
				console.log("Found these records");
				callback(docs);
			}else{
				callback(err);
			}
		})
}