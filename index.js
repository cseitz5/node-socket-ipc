
var socketio = require("socket.io");
socketio.$client = require("socket.io-client");

var path = require("path");
var os = require("os");

var defaultPort = 57125;

module.exports = {
  //socketio: socketio,
  connect: function(port = defaultPort) {
    var io = socketio.$client("http://localhost:" + port + "");
    return io;
  },
  host: function(port = defaultPort) {
    var io = socketio(port, {
      //path: "/socket.io",
      //serveClient: false,
    });
    io.on("error", (e) => {
      console.log(e);
    })
    return io;
  },
}
