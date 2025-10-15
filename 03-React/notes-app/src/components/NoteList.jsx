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
                <div key={note.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-gray-300"
                     style={{borderLeftColor: note.priority === 'Low' ? 'green' : note.priority === 'Medium' ? 'orange' : 'red'}}>
                    <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                    <p className="text-sm text-gray-500"><strong className="text-gray-900">Priority:</strong> {note.priority}</p>
                    <p className="text-sm text-gray-500"><strong className="text-gray-900">Category:</strong> {note.category}</p>
                    <p className="text-gray-600 mb-4 mt-2">{note.description}</p>
                    <button
                        onClick={() => deleteNote(note.id)}
                        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700">🗑️Delete</button>
                </div>
            ))}
        </div>
    );
};

export default NoteList;