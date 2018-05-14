const chapterController = require("../controllers/chapter.controller");

module.exports = app => {
    app.post("/api/chapter", chapterController.newChapter);
}