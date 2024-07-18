const Note = require("../models/Note");

exports.createNote = async (req, res) => {
  const { title, content, tags, backgroundColor, archived, trash } = req.body;
  try {
    const newNote = new Note({
      title,
      content,
      tags,
      backgroundColor,
      archived,
      trash,
      user: req.user.id  //req.user by auth middleware
    });
    const note = await newNote.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in Saving');
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
