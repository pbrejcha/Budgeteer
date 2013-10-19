/*
Mongo shell script for creating a connection, making/connecting to a DB,
  and entering test data into the DB




Delete a database:
mongo <dbname> --eval "db.dropDatabase()"
*/
dbName = "testBudgeteerDB";

print("Creating new mongo object at 127.0.0.1:27017");
conn = new Mongo("127.0.0.1", 27017);

//Delete the database and any old/modified records
db = conn.getDB(dbName);
db.dropDatabase();

//Create the fresh database
print("Getting connection to 'testBudgeteerDB'");
db = conn.getDB(dbName);

//Create test data
j = {name: "testName"};

//Insert test data into DB
db.collection.insert(j);

print("Finished inserting data");

