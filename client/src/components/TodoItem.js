import React, { useEffect, useState, useRef } from "react";

export function TodoItem({id, text, removeItem}) {
    const [complete, setComplete] = useState(false);

    return (
        <div>
            <p className={complete ? "completed" : ""}>{text}</p>
            <button onClick={() => setComplete(true)}>Complete</button>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}