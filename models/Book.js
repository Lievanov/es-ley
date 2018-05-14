const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    bookName: { 
        type: String, 
        unique: true,
        required: true
    },
    considering: String,
    titles: [Schema.Types.ObjectId]
});

mongoose.model("books", bookSchema);
module.exports.bookSchema;