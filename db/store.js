const util = require("util");
const fs = require('fs');

const {v4: uuidv4} = require("uuid");
uuidv4();
console.log(uuidv4());
console.log(uuidv4());

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        note.uuid = uuidv4();
        console.log(note);
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes)
        })
    }

    addNotes(note) {
        this.read().then((notes) => {
            JSON.parse(notes).push(note.uuid);
            this.write(JSON.parse(notes))
            console.log(notes);
            //Code to add notes and send notes back
        })
        return this.getNotes();
    }
}

//export new store
module.exports = new Store();

        //create a function to addNotes

        //create a function to removeNotes by ID 