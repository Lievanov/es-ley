const cors = require('cors');
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require('./models/Catalog');
require('./models/Book');
require('./models/Title');
require('./models/Chapter');
require('./models/Section');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
// mongoose.connect(keys.mongoURI, { useMongoClient: true });
const app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

require("./routes/catalogRoutes")(app);
require("./routes/bookRoutes")(app);
require("./routes/titleRoutes")(app);
require("./routes/chapterRoutes")(app);
require("./routes/sectionRoutes")(app);

console.log("ES-Ley is running on port PORT " + PORT);
app.listen(PORT);
