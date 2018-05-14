const mongoose = require("mongoose");
const { Schema } = mongoose;

const chapterSchema = new Schema({
    chapterName: String,
    order: Number,
    sections: [Schema.Types.ObjectId],
    articles: [Schema.Types.Mixed]
});

mongoose.model("chapters", chapterSchema);
module.exports = chapterSchema;