import React from "react";

const Child = ({setOption, number})=>{
    return (
        <div className="child">
            <h2>Child Component {number}</h2>
            <button onClick={() => setOption(`Option ${number}`)}>Option {number}</button>
        </div>
    )
}

export default Child;