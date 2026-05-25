const Note = require("../models/Note");

const createNote = async (req, res) => {

  try {

    const { content } = req.body;

    const note = await Note.create({

      user: req.user.id,

      content,
    });

    res.status(201).json(note);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }

};
const getNotes = async (req, res) => {

  try {

    const notes = await Note.find({

      user: req.user.id,

    }).sort({ createdAt: -1 });

    res.json(notes);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }

};
module.exports = {

  createNote,

  getNotes,
};