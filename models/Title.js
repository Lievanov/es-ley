const mongoose = require("mongoose");
const { Schema } = mongoose;

const titleSchema = new Schema({
    titleName: String,
    order: Number,
    chapters: [Schema.Types.ObjectId],
    articles: [Schema.Types.Mixed]
});

mongoose.model("titles", titleSchema);