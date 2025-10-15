import React from 'react';
import Note from "./Note";

const NoteList = ({notes, deleteNote}) => {

    if(notes.length === 0) {
        return (
            <div className="p-4">
                <p className="text-center text-gray-500">No notes added yet</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {notes.map((note) => (
                <Note key={note.id} note={note} deleteNote={deleteNote}/>
            ))}
        </div>
    );
};

export default NoteList;