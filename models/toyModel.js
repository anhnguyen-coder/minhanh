var mongoose = require('mongoose');

var toySchema = mongoose.Schema(
    {
        Name: String,
        Image: String,
        Quality: String,
        Qrigin: String,
        Price: Number,

    },
    
         

);

var toyModel = mongoose.model("toys", toySchema, "toy");

module.exports = toyModel;