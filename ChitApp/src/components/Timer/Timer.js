import React, {useEffect, useState} from 'react';
import './Timer.css'

export function Timer(){

//step 1
// create state
    const [currentDateTime,setCurrentDateTime]=useState(new Date());

//step 2
//update state

    useEffect(() => {
        setInterval(()=>{
            setCurrentDateTime(new Date())
        },1000)
    }, [currentDateTime]);


    return(
        /*Step 3
        display timer*/
        <div>
            <h6 className="timer">{currentDateTime.toLocaleTimeString()}</h6>
        </div>

    )



}



