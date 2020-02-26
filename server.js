const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 6789 });

console.log("starting");
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    console.log('got message '+data);
    wss.clients.forEach(function each(client) {
      console.log('client '+client);
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
        console.log("sending "+data);
      }
    });
  });
});
