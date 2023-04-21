import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client';


function TodoItem({id, text, removeItem}) {
    const [complete, setComplete] = useState(false);

    return (
        <div>
            <p className={complete ? "completed" : ""}>{text}</p>
            <button onClick={() => setComplete(true)}>Complete</button>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}


function TodoForm ({ currentItems, setItems }) {
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

function TodoApp() {
    const [items, setItems] = useState([]);

    function removeItem(timestamp) {
        let currentItems = items;
        let idx = currentItems.findIndex(x => x.id === timestamp);
        currentItems.splice(idx, 1);
        setItems([...currentItems]);
    }

    return (
        <div className="app-container">
            <TodoForm currentItems={items} setItems={setItems} />
            <ul>
                {
                    items.map((item, i) => {
                        return <li key={item.id}>
                            <TodoItem text={item.title} id={item.id} removeItem={removeItem} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<TodoApp />)