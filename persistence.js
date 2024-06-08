let _notes = [
    { id: "2", text: "CPSC 2650" },
    { id: "1", text: "An awesome web dev Note" },
];

// TODO: implement addNote and removeNote
// For fun: why do we export a function instead of notes directly?
// it is better because it makes it more modular, allowing to change only of the code if needed.
const notes = () => _notes;

const addNote = (id, content) => {
    _notes.push({ id: id, text: content });
}

const removeNote = (id) => {
    let found = _notes.findIndex(note => note.id == id);
    _notes.splice(found, 1);
}

const editNote = (id, content) => {
    let found = _notes.findIndex(note => note.id == id);
    _notes[found].text = content;
}

export { notes, removeNote, addNote, editNote };