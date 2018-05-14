const mongoose = require("mongoose");
const Title = mongoose.model("titles");
const Chapter = mongoose.model("chapters");

module.exports.newChapter = async (req, res) => {
    const { chapterName, sections, articles, order, titleID } = req.body;
    const chapter = new Chapter({
       chapterName, sections, articles, order 
    });
    const answer = await chapter.save();
    await Title.findById(titleID, async (err, title) => {
        title.chapters.push(answer.id);
        const ans = await title.save();
        console.log(ans);
    });
    res.status(201).send(answer);
    
}