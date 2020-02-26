This is a simple sever/js/html page to demonstrate how you could indicate which camera is live to a bunch of operators.

There is *no* security bar the obscurity of the port used. Any cam operator could login as the master - which you might want.... who knows!

You *will* need to modify the html file to set the address of the websocket server. The websocket server is very simple - it just broadcasts anything it gets to all connected clients.
You could make the server.js also serve the webpage on another port.

Oh and I created only 5 camera operators - and the code is all static... you might want to make it more dynamic/pretty/neat...