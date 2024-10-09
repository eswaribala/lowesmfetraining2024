import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import PublishMFE from "./components/PublishMFE/PublishMFE";

function App() {
   const[socket,setSocket]=useState('');
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
      <h1>Micro Frontend 1 - Publisher</h1>
      {socket ? <PublishMFE socket={socket} /> : <p>Connecting to WebSocket...</p>}
    </div>
  );
}

export default App;
