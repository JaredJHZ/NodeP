console.log('Starting notes.js');
const fs = require('fs');

addNote = (title,body) =>{
    var note = '\n'+ title + '\n' + body;
    fs.appendFile('notes.txt',note, (error)=>{
        if(error)
        {
            console.log(error);
        }
    })
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
    console.log('reading file',title);
}

removeFile = (title) =>{
    console.log('removing file',title);
}


sum = (a,b) => {
    return a+b;
};

module.exports = {addNote,sum,getAll,readFile,removeFile};