const TextInput = ({label, name, value, onChange, required=false}) => {
    return (
        <div className="mb-4">
            <label htmlFor={ name } className="block font-bold mb-2">{ label }</label>
            <input
                   name={ name }
                   value={value}
                   onChange={onChange}
                   required={required}
                   className="w-full p-2 border rounded-lg"
            />
        </div>

    );
};

export default TextInput;