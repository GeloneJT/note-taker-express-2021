const util = require("util");
const fs = require('fs');

const {v4: uuidv4} = require("uuid");
uuidv4();
console.log({uuidv4});

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
        //create a function to getNotes
    }

    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes)
        })
    }

    addNotes() {
        
    }
}

//export new store
module.exports = new Store();

        //create a function to addNotes

        //create a function to removeNotes by ID 