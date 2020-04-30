

var host = require(__dirname + "/index.js").host();


host.on("connect", function(socket) {
  console.log("Another process has connected");
  socket.on("coolEvent", function(data) {
    console.log("A coolEvent occured, ", data);
  })
});

var conn = require(__dirname + "/index.js").connect();
//console.log(conn);
conn.on("connect", function() {
  console.log("Connected to the host");
  conn.emit("coolEvent", {
    yeet: "we sent some data",
  })
});
conn.on("connect_error", function(e) {
  console.log(e);
});
