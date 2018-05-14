const titleController = require("../controllers/title.controller");

module.exports = app => {
    app.post("/api/title", titleController.newTitle);
}