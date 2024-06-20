
const WebSocket = require('ws');







const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send a message to the client after a 5-second delay
  setInterval(() => {
    console.log('inside settimeout')
    ws.send(JSON.stringify(Math.floor(Math.random() * 10) + 1))
  }, 3000);
});

console.log('WebSocket server is running on ws://localhost:8080');
