import React, {useEffect, useState} from 'react';

import './PublishMFE.css';

const PublishMFE = ({socket}) => {
   const[message,setMessage]=useState('');


    function handlePublish(){
       socket.send(JSON.stringify({type:'PUBLISH',data:JSON.stringify(message)}));
       setMessage('');
     }
   return (
        <div >
            <h1>Enter Message To Publish</h1>
            <input id="message" type="text" value={message}
                   onChange={(e)=>
                       setMessage(e.target.value)}/>
            <button onClick={handlePublish}>Publish Message</button>
        </div>
    );
}



export default PublishMFE;
