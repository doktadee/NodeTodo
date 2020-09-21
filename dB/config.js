const mongoose = require('mongoose');
const URI    = 'mongodb+srv://User:1234@cluster0.cieml.mongodb.net/User?retryWrites=true&w=majority';

var connectDB = async () => {
    await mongoose.connect (URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  .then(()=> console.log(" Successfully connected to Mongo DB!!!"))
  .catch((error) => console.log(error.message))}

module.exports = connectDB;