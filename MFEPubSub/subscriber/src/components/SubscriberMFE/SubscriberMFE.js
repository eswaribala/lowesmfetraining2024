import React, {useEffect, useState} from 'react';



const SubscriberMFE = ({socket}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.onmessage = async (event) => {
            let messageData;

            // Check if the event data is a Blob
            if (event.data instanceof Blob) {
                // Convert Blob to string
                messageData = await event.data.text();
            } else {
                // Assume the message is already a string
                messageData = event.data;
            }

            // Try to parse the message as JSON
            try {
                const receivedMessage = JSON.parse(messageData);

                if (receivedMessage.type === 'PUBLISH') {
                    setMessages((prevMessages) => [...prevMessages, receivedMessage.data]);
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };
    }, [socket]);

   return (
        <div>
            <ul>
                {
                    messages.map(item=>{
                        return(
                            <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}



export default SubscriberMFE;
