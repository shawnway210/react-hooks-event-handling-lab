import React from "react"

function Keypad (){
    function handleChange(e){
        console.log(`${e.target.placeholder}`)
    }
    return (
        <div>
            <input 
            type="password"
            onChange={(handleChange)}
            placeholder="Entering password..."
            />
        </div>
    )
}

export default Keypad;