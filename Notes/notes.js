console.log('Starting notes.js');


addNote = () =>{
    console.log('addNote');
    return 'New note';
};

sum = (a,b) => {
    return a+b;
};

module.exports = {addNote,sum};