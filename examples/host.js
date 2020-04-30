// Example code for a nodejs program that is hosting the IPC socket.

var io = require("socketio-ipc").host(); // first paramater can be a port, defaults to 57125
// socketio-ipc.host() returns a socket.io server. https://socket.io/docs/server-api/

io.on("connect", function(socket) {
  console.log("Another process has connected");
  socket.on("coolEvent", function(data) {
    console.log("A coolEvent occured, ", data);
  })
});
