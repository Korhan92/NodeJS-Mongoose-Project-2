const mongoose = require('mongoose');
//gmail hesabı
//const connectionString= "your connection string in mongodb";
const connectionString =  'mongodb://127.0.0.1:27017';  // for local mongo db with compas


mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true }, 
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;