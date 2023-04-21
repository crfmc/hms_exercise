import React, { useEffect, useState, useRef } from "react";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

export function TodoApp() {
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