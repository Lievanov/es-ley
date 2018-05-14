const bookController = require("../controllers/book.controller");

module.exports = app => {
    app.post("/api/book", bookController.createBook);
};