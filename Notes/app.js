
console.log('Starting app');

//requires
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs
.command("add","adding a new note",{
    title: {
        describe : "The tittle of the note",
        demand: true,
        alias : "t"
    },
    body : {
        describe: "The body of the note you want to add",
        demand : true,
        alias : "b"
    }
})
.help()
.argv;
var command = process.argv[2];

showNote = (Note) => {
    debugger;
    console.log("---");
    console.log ("Note Title: "+note.title);
    console.log(note.body);
}

if(command === 'read')
{
    var note = notes.readFile(argv.title);
    if(!note){
        console.log("error");
    }else
        showNote(note);
}else if(command === 'list')
{
    notes.getAll();
}else if(command === 'delete')
{
    notes.removeFile(argv.title);
}
else if(command === 'add')
{
   var note = notes.addNote(argv.title, argv.body);
   if(!note)
   {
       console.log("error");
   }else{
       showNote(note);
   }
} else
{
    console.log('Command not found');
}