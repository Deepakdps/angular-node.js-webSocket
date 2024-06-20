const WebSocket = require('ws'); 

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Connected to server');

  // Send a message to the server
  ws.send('Hello from client');

  // Close the connection after a 10-second delay
  setTimeout(() => {
    ws.close();
  }, 50000);
});

ws.on('message', (message) => {
  console.log(`Received: ${message}`);
  // Save the document to the collection







});

ws.on('close', () => {
  console.log('Disconnected from server');
});
