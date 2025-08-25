"use client"
import React, { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <form>
            <input value={value} onChange={handleChange} />
            <button>Enviar</button>
        </form>
    );
}

export default App


