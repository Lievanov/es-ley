const sectionController = require("../controllers/section.controller");

module.exports = app => {
    app.post("/api/section", sectionController.newSection);
}