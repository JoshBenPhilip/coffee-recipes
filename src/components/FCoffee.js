import React, { useState } from "react";

function FCoffee({ firstName }) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
        <h1>Coffee List (f)</h1>
        <p>Hello {firstName}</p>
        <p>You clicked the button {count} times.</p>
        <button onClick={()=> this.handleClick()}>Click Me</button>

        </>
    )
}




export default FCoffee;