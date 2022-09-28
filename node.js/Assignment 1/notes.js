const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

var getNotes = () =>{
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse('New note added!'))
    } else {
        console.log(chalk.yellow.inverse('Note title taken!'))
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)
    if(keepNotes.length < notes.length){
        saveNotes(keepNotes)
        console.log(chalk.green.inverse("note removed!!"))
    }else{
        console.log(chalk.red.inverse("no note found !!"))
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else {
        console.log(chalk.red.inverse("note not found"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}