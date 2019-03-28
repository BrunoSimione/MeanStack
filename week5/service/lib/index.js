    import request from 'request-promise';
    import MongoClient from 'mongodb';
    import micro,{
      json,
      send,
      sendError
    } from 'micro';


    const DBName = 'products';
    const url = `mongodb://192.168.99.100:27017/${DBName}`;

    async function connector() {


      try {
        // Use connect method to connect to the Server
        return await await MongoClient.connect(url);
      } catch (err) {
        console.log(err.stack);
      }
    }

    async function findEletronic(db, query){
      try{
        let r = await db.collection('eletronics').find(query).toArray();
        console.log(r);
        return(r);
      } catch(err){
        return(err);
      }
    }
    async function updateEletronicByBrand(db, query){
      const {brand} = query;
      try{
        return await db.collection('eletronics').update({brand:brand}, {$set: query}).toArray();
      } catch(err){
        return (err);
      }
    }
    async function insertEletronic(db, query){
      console.log("inserting an eletronic");
      try{
        return await db.collection('eletronics').insert(query);
      } catch(err) {
        return(err)
      }
    }
    async function deleteEletronicByBrand(db,query){
      const {brand} = query;
      try{
        
        return await db.collection('eletronics').remove({brand:brand});
      
      }catch(err){
        return(err);
      }
    }

    /**
     * Handler functions
     */
     
    async function getHandler(request){
      const js = await json(request);
      console.log(js);
      const client = await connector();
      const db = client.db(DBName);
      return await findEletronic(db, js);
    }
    async function postHandler (request){
      const js = await json(request)
      console.log(js);
      const client = await connector();
      const db = client.db(DBName);
      return await insertEletronic(db, js);
    }
    async function putHandler(request){
      const js = await json(request);
      const client = await connector();
      const db = client.db(DBName);
      return await updateEletronicByBrand(db, js);
    }
    async function deleteHandler(request){
      const js = await json(request);
      const client = await connector();
      const db = client.db(DBName);
      return await deleteEletronicByBrand(db, js);
    }

    export default async(request, response)=>{
      try{
        switch(request.method){
          case 'GET':
            console.log("a get call was made");
            return await getHandler(request);
          case 'POST':
            console.log("a post call was made");
            return await postHandler(request);
          case 'PUT':
            console.log("a put call was made");
            return await putHandler(request);
          case 'DELETE':
            console.log("a delete call was made");
            return await deleteHandler(request);
          default:
            send(response, 405, 'Invalid');
            break;
        }
      } catch (error){
        throw error;
      }
    }
