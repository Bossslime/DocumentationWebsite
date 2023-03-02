# This code will help you be able to connect to a socket.io instance that is hosted in a separate location
This is assuming the socket instance is running on a local machine with an ip of 192.168.0.150 and a port of 3000

### Backend Code
```JavaScript
//Create an http server instance without express
const http = require('http');
const server = http.createServer();

const port = 3000; //This can be changed to whatever you need
const ip = "92.168.0.150";

server.listen(port, () => {
    console.log(`Socket is listening on ${ip}:${port}`);
});

const io = require("socket.io")(server, {
    cors: { //This is very important, you need to only allow connections from your frontend to prevent others from getting in
        origin: "Ip.Of.Website.Instance:Port"
    }
});

io.on("connection", socket => {
    socket.on("cack", function (data) {
        console.log(data);
    });
});
```


### Frontend Code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example Site</title>
  </head>
  <body>
    <h1>This is an example site</h1>
  </body>

  <script>
      let socket = io('http://192.168.0.150:3000'); //You can replace this with whatever ip and port the socket instance is on
      
      socket.emit('cack', "This client is now connected");
  </script>
</html>
```