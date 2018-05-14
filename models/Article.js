const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
    byId: Schema.Types.Mixed,
    allIds: [String]
});

mongoose.model("articles", articleSchema);
module.exports = articleSchema;