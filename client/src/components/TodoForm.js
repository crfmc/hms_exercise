import React, { useState } from 'react';

export function TodoForm ({ currentItems, setItems }) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (input.length > 0) {
            let timestamp = Date.now(); // use timestamp as id's
            setItems([...currentItems, { title: input, id: timestamp}])
            setInput("");
        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button type="submit" disabled={ input.length > 0 ? "" : "disabled" }>Submit</button>
        </form>
    )
};
