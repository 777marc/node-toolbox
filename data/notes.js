const fs = require('fs');
const _ = require('lodash');

let notes = [];

const listNotes = () => {
  loadNotes()
  return JSON.stringify(notes);
};

const addNote = (title, body = '') => {
    if(_.isUndefined(title) ||  title == '')  
      return;
  
    let newNote = { title: title, body: body };
    loadNotes();
    if(_.findIndex(notes,function(o) { return o.title == title;}) === -1) {
      notes.push(newNote);
      setNotes();
    }
};

const getNote = (title) => {
    loadNotes();
    return notes.filter(t => t.title === title);
}

const removeNote = (title) => {
    loadNotes();
    _.remove(notes, function(n) {
      return n.title === title;
    });
    setNotes();
};

const loadNotes = () => {
  notes = JSON.parse(fs.readFileSync('data/info.json'));
};

const setNotes = () => {
  fs.writeFileSync('data/info.json',JSON.stringify(notes));
};

module.exports = {  
  listNotes,
  addNote,
  getNote,
  removeNote
}