const catalogController = require("../controllers/catalog.controller");

module.exports = app => {
    app.post("/api/catalog", catalogController.newCatalog);
    app.get("/api/catalog", catalogController.catalogList);
}