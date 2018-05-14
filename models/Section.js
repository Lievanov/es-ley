const mongoose = require("mongoose");
const { Schema } = mongoose;

const sectionSchema = new Schema({
    sectionName: String,
    order: Number,
    articles: [Schema.Types.Mixed]
});

mongoose.model("sections", sectionSchema);