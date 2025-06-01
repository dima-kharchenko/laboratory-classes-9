const { DB_USER, DB_PASS } = require("./config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@mvc.1ut23ja.mongodb.net/?retryWrites=true&w=majority&appName=MVC`)
    .then((client) => {
      console.log("Connected!");
      database = client.db("backend_api");
      callback();
    })
    .catch((error) => console.log(error));
};

const getDatabase = () => {
  if (!database) {
    throw "No database found!";
  }

  return database;
};

module.exports = { mongoConnect, getDatabase };
