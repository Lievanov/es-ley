const mongoose = require("mongoose");
const Book = mongoose.model("books");
const Catalog = mongoose.model("catalogs");

module.exports.bookList = async (req, res) => {
    let offset = 0, limit = 10;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.limit){
        limit = parseInt(req.query.limit, 10);
    }
    const books = await Book.find().skip(offset).limit(limit);
    if(books){
        return res.status(200).send(books);
    } else {
        return res.status(404).send({ "Message": "Libros no encontrados"});
    }
}

module.exports.createBook = async (req, res) => {
    const { bookName, considering, title, catalogID } = req.body;
    const book = new Book({
        bookName, considering, title
    });
    const answer = await book.save();
    await Catalog.findById(catalogID, async (err, catalog) => {
        if(err){
            console.log(`Error: ${err}`);
        }
        console.log(catalog.books);
        catalog.books.push(answer.id);
        const ans = await catalog.save();
        console.log(ans);
    });
    //console.log(answer);
    res.status(201).send(answer);
}