const mongoose = require("mongoose");
const { Schema } = mongoose;
var uniqueValidator = require('mongoose-unique-validator');

const catalogSchema = new Schema({
    catalogName: { 
        type: String, 
        unique: true,
        required: true
    },
    order: Number,
    books: [Schema.Types.ObjectId] 
});

catalogSchema.plugin(uniqueValidator);

mongoose.model("catalogs", catalogSchema);