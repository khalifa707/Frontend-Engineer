import React from 'react';
import {useRef} from "react";

const App = () => {
    const inputRef = useRef(null);
    const submit = () => {
        alert(inputRef.current.value);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">useRef Example</h2>
            <input type="text" placeholder="Type Something..."
                   className="w-full p-2 border rounded-lg"
                   ref={inputRef}/>
            <button
                onClick={submit}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
        </div>
    );
};

export default App;