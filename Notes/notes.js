console.log('Starting notes.js');
const fs = require('fs');

addNote = (title,body) =>{
    var note = {
        "title":title,
        "body": body
    };
    var allNotes =[];
    
    var noteS = fs.readFileSync("notes.JSON");
    
    allNotes = JSON.parse(noteS);

    allNotes.push(note);

    console.log(allNotes);

    fs.writeFileSync("notes.JSON",JSON.stringify(allNotes));
    
    
};

getAll = ()=>{
    console.log('Listing all notes');
    var allNotes = JSON.parse(fs.readFileSync('notes.JSON'));
    var i = 1;
    allNotes.forEach(element => {
        console.log('Nota:'+i);
        i++;
        console.log(element.title+'\n');
        console.log(element.body+'\n');
        console.log('\n');
    });

};

readFile = (title) =>{
    var note = JSON.parse(fs.readFileSync("notes.JSON"));
    note.forEach(element => {
        if(element.title === title){
            console.log(element.title+":"+element.body)
        }
    });
}

removeFile = (title) =>{
    var note = [];
    var n = {
        title:"", 
        body: ""
    };
    note = JSON.parse(fs.readFileSync("notes.JSON"));
    note.forEach(element =>{
        if(element.title === title)
        {
            n.title = element.title;
            n.body = element.body;      
        }
    });
    note.pop(n);
    
    fs.writeFileSync("notes.JSON",JSON.stringify(note));
    
}


sum = (a,b) => {
    return a+b;
};

module.exports = {addNote,sum,getAll,readFile,removeFile};