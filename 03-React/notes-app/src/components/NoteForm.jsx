import { useState } from 'react';
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";

const NoteForm = ({notes, setNotes}) => {
/*    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('Work');
    const [description, setDescription] = useState('');*/
    const [formData, setFormData] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    });

    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.title || !formData.description) return;

        //Create Note Object
        const newNote = {
            id: Date.now(),
            ...formData
        }

        //Add Notes to state
        setNotes([newNote, ...notes]);

        //Clear Form
        setFormData({
            title: '',
            priority: 'Medium',
            category: 'Work',
            description: ''
        });
    };

    return (
        <>
            <button onClick={() => setIsFormVisible(!isFormVisible)} className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 mb-4">
                {isFormVisible ? 'Close Form' : 'Add Note +'}
            </button>
            {isFormVisible && (
                <form action="" className="mb-4" onSubmit={handleSubmit}>
                    <TextInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <SelectInput
                        label="Priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        options={[
                            {value: 'Low', label: '🟢 Low'},
                            {value: 'Medium', label: '🟠 Medium'},
                            {value: 'High', label: '🔴 High'}
                        ]}
                    />
                    <SelectInput
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={[
                            {value: 'Work', label: 'Work'},
                            {value: 'Personal', label: 'Personal'},
                            {value: 'Shopping', label: 'Shopping'}
                        ]}
                    />
                    <TextArea
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
                Add Note
            </button>
        </form>
                )}
        </>
    );
}
export default NoteForm;