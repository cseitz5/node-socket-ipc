// Example code for a nodejs program that is connecting to an already hosted IPC socket.

var socket = require("socketio-ipc").connect(); // first paramater can be a port, defaults to 57125
// socketio-ipc.connect() returns a socket.io client. https://socket.io/docs/client-api/

socket.on("connect", function() {
  console.log("Connected to the host");
  socket.emit("coolEvent", {
    yeet: "we sent some data",
  })
});
