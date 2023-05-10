const fs = require('fs')

const getNotes = () => 'Your notes...'


const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNotes = notes.filter((note) => note.title === title)

	if(duplicateNotes.length === 0){

	notes.push({
		title: title,
		body: body
	})
	saveNotes(notes)
	console.log('New Note added!')
	} else {
	console.log('Note title Taken!')
	}
}

const readNote = (title) => {
        const notes = loadNotes()
        const duplicateNote = notes.find((note) => note.title === title)

        if(duplicateNote){

        console.log(duplicateNote.title)
	console.log(duplicateNote.body)
        } else {
        console.log('Note not found!')
        }


}

const removeNote = function(title){
	const notes = loadNotes()
	const Notestokeep = notes.filter((note) => note.title !== title)
	//console.log(Notestokeep.length)
	//console.log(notes.length)
	//saveNotes(Notestokeep)
	if (Notestokeep.length === notes.length){
	console.log('Note not found!')
	} else {
	saveNotes(Notestokeep)
	console.log('Note removed!')
	}
}


const saveNotes = function(notes){
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
	try {
	const dataBuffer = fs.readFileSync('notes.json')
	const dataJSON = dataBuffer.toString()
	return JSON.parse(dataJSON)
	} catch(e){
		return []
	}

}


const listNote = () => {
	const notes = loadNotes()
	notes.forEach((note) => {
	console.log(note.title)
	//console.log(note.body)
	})
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNote: listNote,
	readNote: readNote
}
