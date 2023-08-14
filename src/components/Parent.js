import React , { useState }  from "react";
import Child from "./Child";

const Parent = () =>{
    const [option, setOption] = useState('');
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child setOption = {setOption} number = {1}/>
            <Child setOption = {setOption} number = {2}/>
            <p>Selected Option: {option}</p>
        </div>
    )
}

export default Parent;
