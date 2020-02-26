const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 6789 });

http.createServer(function (request, resource){
  resource.write(fs.readFileSync('./cammaster.html','utf8'));
  resource.end();
  console.log("Sent webpage");
}).listen(4567);

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
