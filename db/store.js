const util = require("util");
const fs = require('fs');

const uuidv1 = require("uuid");
// uuidv1();

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
}

//export new store
module.exports = new Store();

        //create a function to addNotes

        //create a function to removeNotes by ID 