console.log('Starting notes.js');
const fs = require('fs');

addNote = (title,body) =>{

    var fetchNotes = () =>{
        try{
            var allNotes = fs.readFileSync('notes.JSON');
            return JSON.parse(allNotes);
        }catch(e)
        {
            return [];
        }
    }
    var saveNotes = (allNotes) =>{
        fs.writeFileSync("notes.JSON",JSON.stringify(allNotes));
    }
    
    var note = {
        "title":title.toUpperCase(),
        "body": body.toUpperCase()
    };
    
    
    var allNotes =[];
    var allNotes = fetchNotes();


    var duplicated = allNotes.filter((note)=> note.title === title.toUpperCase());
    if(duplicated.length === 0){
        allNotes.push(note);
        saveNotes(allNotes);
        return note;
        }
        else
         {
              console.log("Title duplicated, please change the title of your note");
        
         }
   

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
        if(element.title === title.toUpperCase()){
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
        if(element.title === title.toUpperCase())
        {
            n.title = element.title;
            n.body = element.body;      
        }
    });
    note.pop(n);
    
    fs.writeFileSync("notes.JSON",JSON.stringify(note));
    
}


module.exports = {addNote,getAll,readFile,removeFile};