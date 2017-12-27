
console.log('Starting app');

//requires
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];


if(command === 'read')
{
    notes.readFile(argv.title);
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
       console.log("Note Title: "+note.title);
       console.log("Note body: "+note.body);
   }
} else
{
    console.log('Command not found');
}