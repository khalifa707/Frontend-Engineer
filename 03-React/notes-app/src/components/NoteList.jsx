const NoteList = ({notes}) => {

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
                <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                    <p className="text-gray-600 mb-4">{note.description}</p>
                    <p className="text-sm text-gray-500">Priority: {note.priority}</p>
                    <p className="text-sm text-gray-500">Category: {note.category}</p>
                </div>
            ))}
        </div>
    );
};

export default NoteList;