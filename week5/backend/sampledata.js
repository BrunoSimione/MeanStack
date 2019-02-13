    const MongoClient = require("mongodb").MongoClient;
    const DBName = "entertainment";

    //note authentication via url
    //this should be replaced with environment variables (for security)
    const url = `mongodb://192.168.99.100:27017/${DBName}`;

    /*
    Note:
    This example assumes mongo running in a Docker container, from a standard docker mongo image.
    docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie

    Use 'docker-machine env' to figure out the IP of your host network, and be sure to forward port 27017
    */

    const actorData = [
      {
        firstName: "John",
        lastName: "Travolta",
        birth: "February 18, 1954",
        credits: 76,
        tags: ["actor", "soundtrack", "producer"],
        image:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjQ0ODkxN15BMl5BanBnXkFtZTcwMDc5NjQwNw@@._V1_SY1000_CR0,0,743,1000_AL_.jpg",
        movies: [
          {
            title: "Battlefield Earth",
            year: 2000
          },
          {
            title: "FaceOff",
            year: 1997
          },
          {
            title: "Pulp Fiction",
            year: 1994
          }
        ]
      },
      {
        firstName: "Uma",
        lastName: "Thurman",
        birth: "April 29, 1970",
        tags: ["actress", "soundtrack", "writer"],
        image:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
        credits: 63,
        awards: [
          {
            type: "oscar",
            status: "nominated",
            title: "best actress",
            year: 1995,
            film: "Pulp Fiction"
          },
          {
            type: "golden globe",
            status: "nominated",
            title: "best performance",
            year: 2005,
            film: "Kill Bill Vol2"
          }
        ],
        movies: [
          {
            title: "Kill Bill Vol1",
            year: 2003
          },
          {
            title: "Pulp Fiction",
            year: 1994
          },
          {
            title: "Batman and Robin",
            year: 1994
          }
        ]
      }
    ];

    //connect call returns a connection promise, which can be 'then' with a callback
    MongoClient.connect(url)
      .then(con => {
        // <- callback
        console.log("Connected");
        return con
          .db("entertainment")
          .collection("actors")
          .insert(actorData)
          .then(out => console.log(out))
          .then(() => con.close());
      })
      .catch(err => {
        //if anything fails in the stack above, it will be caught here, stack stops
        console.log(err); //check for authentication fail?
      });
