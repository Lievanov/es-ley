const mongoose = require("mongoose");
const Title = mongoose.model("titles");
const Book = mongoose.model("books");

module.exports.newTitle = async (req, res) => {
    const { titleName, chapter, bookID, articles, order } = req.body;
    const title = new Title ({
        titleName, chapter, order, articles
    });
    const answer = await title.save();
    //Error handling in case bookID is null
    await Book.findById(bookID, async (err, book) => {
        book.titles.push(answer.id);
        const ans = await book.save();
        console.log(ans);
    });
    console.log(answer);
    res.status(201).send(answer);
}