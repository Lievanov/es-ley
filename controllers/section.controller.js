const mongoose = require("mongoose");
const Section = mongoose.model("sections");
const Chapter = mongoose.model("chapters");

module.exports.newSection = async (req, res) => {
    const { sectionName, order, articles, chapterID } = req.body;
    const section = new Section({
        sectionName, order, articles
    });
    console.log(`${section}`);
    const answer = await section.save();
    await Chapter.findById(chapterID, async (err, chapter) =>{
        chapter.sections.push(answer.id);
        const ans = await chapter.save();
        console.log(ans);
    });
    res.status(201).send(answer);
}