const mongoose = require("mongoose");
const Catalog = mongoose.model("catalogs");

module.exports.catalogList = async (req, res) => {
    
    let offset = 0, limit = 10;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.limit){
        limit = parseInt(req.query.limit, 10);
    }
    const catalogs = { catalogs: "" }
    catalogs.catalogs = await Catalog.find().skip(offset).limit(limit);
    console.log(catalogs);
    if(catalogs){
        return res.status(200).send(catalogs);
    } else {
        return res.status(404).send({ "Message": "Libros no encontrados"});
    }
}

module.exports.newCatalog = async (req, res) => {
    const { catalogName, books, order } = req.body;
    const catalog = new Catalog({
        catalogName, books, order
    });
    const answer = await catalog.save();
    console.log(catalog)
    if(answer){
        res.status(201).send(answer);
    }
}

