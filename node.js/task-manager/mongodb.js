// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp);

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
       return console.log('unable to connect to the database');
    }
    console.log('connect correctly');
    
    const db = client.db(databaseName)
  
    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     Completed: false
    // }, {
    //     $set: {
    //         Completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').findOne({_id: new ObjectID("634014a495107acb52571930")}, (error, task) => {
    //     console.log(task);
    // })

    // db.collection('tasks').find({ Completed : true }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })


    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Om',
    //     age: 20
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         Description: 'cleaning',
    //         Completed: true
    //     },{
    //         Description: 'washing',
    //         Completed: false
    //     },{
    //         Description: 'planting',
    //         Completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    
    //     console.log(result.ops)
    // })
})