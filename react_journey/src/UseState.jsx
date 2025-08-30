import React from "react";
import {  useState } from "react";

export default function UseState(){
    const [count, setCount] = useState(0);

    return (
       
        <div className="flex justify-center gap-4 align-middle border-2 border-blue-500 border-width-100px p-4 border-h-10px ">
            <p>Count: {count}</p>
            <button className="border border-red-400 bg-amber-400" onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
        </div>
  
    )
}

