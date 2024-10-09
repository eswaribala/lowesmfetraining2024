import React, {useEffect, useState} from 'react';

import './PublishMFE.css';

const PublishMFE = ({socket}) => {
   const[message,setMessage]=useState('');


    function handlePublish(){
       socket.send(JSON.stringify({type:'PUBLISH',data:JSON.stringify(message)}));
    }
   return (
        <div className="PublishMFE">
            <input type="text" value={message}
                   onChange={(e)=>
                       setMessage(e.target.value)}/>
            <button onClick={handlePublish}>Publish Message</button>
        </div>
    );
}



export default PublishMFE;
