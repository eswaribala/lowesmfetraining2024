const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7078});

let clients = [];

wss.on('connection', (ws) => {
    console.log('Client connected');
    clients.push(ws);

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Broadcast the message to all clients
        clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        clients = clients.filter(client => client !== ws);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:7072');