import React from "react"

function Keypad (){
    function Change() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type='password' onChange={Change}></input>
        </div>
    )
}

export default Keypad;