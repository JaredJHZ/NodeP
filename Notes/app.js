console.log('Starting app');

//requires
const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

command = process.argv[2];

if(command === 'read')
{
    console.log('reading file');
}else if(command === 'list')
{
    console.log('Listing all notes');
}else if(command === 'delete')
{
    console.log('Deleting a note');
}
else if(command === 'add')
{
    console.log('adding a note');
} else
{
    console.log('Command not found');
}