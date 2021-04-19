const notesCtrl = {};

const Note = require("../models/Note");

// Obtengo un JSON con todas la notas
notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find(); // [{}, {}, {}]
  res.json(notes);
};

// Creo y guardo en BD una nueva nota
notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.json({ message: "Note saved" });
};

// Obtengo una sola nota por ID
notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

// Actualizo los campos de una nota por ID
notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(req.params.id, {
    title,
    content,
    author,
  });
  console.log(req.params.id, req.body);
  res.json({ message: "Note updated" });
};

// Elimino la nota por ID
notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};

module.exports = notesCtrl;
