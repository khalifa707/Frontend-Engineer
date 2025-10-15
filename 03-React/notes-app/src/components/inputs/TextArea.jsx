const TextArea = ({label, name, value, onChange, required=false}) => {
    return (
        <div className="mb-4">
            <label htmlFor="" className="block font-bold mb-2">{ label }</label>
            <textarea name={ name }
                      value={ value }
                      onChange={ onChange }
                      required={ required }
                      className="w-full p-2 border rounded-lg">
            </textarea>
        </div>
    );
};

export default TextArea;