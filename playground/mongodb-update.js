//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c479011def9c08bbdc824a5')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    */
   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5c477053d6062d34f0cd953e')
   }, {
       $set: {
           name: 'Yves Mathieu'
       },
       $inc: {
           age: 1
       }
    }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });



    //db.close();
})