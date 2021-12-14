const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://njskinner@ucdavis.edu:HSQcFmjC%21Cp3HrFK%21https://cloud.mongodb.com/v2/618194fd63b0f52be0663c6c#clusters/detail/RiseApp/RiseApp?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
)
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log(err));

module.exports = mongoose.connection;

// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://IGuessImNick:HSQcFmjC%!Cp3HrFK%@riseapp.hmdol.mongodb.net/RiseApp?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);