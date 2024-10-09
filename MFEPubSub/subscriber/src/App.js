import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import SubscriberMFE from "./components/SubscriberMFE/SubscriberMFE";

function App() {
  const[socket,setSocket]=useState(null);
  useEffect(() => {
    const ws=new WebSocket("http://localhost:7078")
    ws.onopen = () => console.log('WebSocket connected');
    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);
  return (
      <div className="App">
        <h1>Micro Frontend - Subsciber</h1>
        {socket ? <SubscriberMFE socket={socket}/> : <p>Connecting to WebSocket...</p>}
      </div>
  );
}

export default App;
