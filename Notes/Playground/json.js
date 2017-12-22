const fs = require('fs');
var noteO = {
    title : "Compras",
    body : "frijoles, arroz"
};

var stringNote = JSON.stringify(noteO);
var note;
fs.writeFileSync("notes.JSON",stringNote);
var s = fs.readFileSync("notes.JSON");
var note = JSON.parse(s);
console.log(typeof note);
console.log(note.title);    