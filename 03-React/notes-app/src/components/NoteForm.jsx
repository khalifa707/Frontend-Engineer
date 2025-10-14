import { useState } from 'react';

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('Work');
    const [description, setDescription] = useState('');
    return (
        <form action="" className="mb-4">
            <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2">Title</label>
                <input type="text" 
                       name="title" 
                       id="title" 
                       value={title} 
                       onChange={(e) => setTitle(e.target.value)} 
                       className="w-full p-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2">Priority</label>
                <select name="priority"
                       id="priority"
                       value={priority}
                       onChange={(e) => setPriority(e.target.value)}
                       className="w-full p-2 border rounded-lg">
                    <option value="High">🔴 High</option>
                    <option value="Medium">🟠 Medium</option>
                    <option value="Low">🟢Low</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2">Category</label>
                <select name="category"
                       id="category"
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                       className="w-full p-2 border rounded-lg">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Ideas">Ideas</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block font-bold mb-2">Description</label>
                <textarea name="description"
                       id="description"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                          className="w-full p-2 border rounded-lg">

                </textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg
            cursor-pointer hover:bg-blue-600">
                Add Note
            </button>
        </form>);
}
export default NoteForm;