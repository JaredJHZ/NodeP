console.log('Starting notes.js');
const fs = require('fs');

addNote = (title,body) =>{
    var note = {
        "title":title,
        "body": body
    };
    var allNotes =[];
    allNotes.push(fs.readFileSync("notes.JSON"));
    allNotes.push(note);
    fs.writeFileSync("notes.JSON",JSON.stringify(allNotes));
    
    
};

getAll = ()=>{
    console.log('Listing all notes');
    fs.readFile('notes.txt',(err,data)=>{
        if(err || !data){
            console.log('error');
        }
        console.log(data.toString());
    })
};

readFile = (title) =>{
    var note = JSON.parse(fs.readFileSync("notes.JSON"));
    note.forEach(element => {
        console.log(element.title);
        if(element.title === title){
            console.log(element.title+" "+element.body)
        }
    });
}

removeFile = (title) =>{
    console.log('removing file',title);
}


sum = (a,b) => {
    return a+b;
};

module.exports = {addNote,sum,getAll,readFile,removeFile};