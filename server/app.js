const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", () => {
  console.log('connected !');
  const location = { latitude: 31.2686074, longitude: 30.0026114, latitudeDelta: 0.04, longitudeDelta: 0.05 }
  setInterval(() => {
    location.latitude = location.latitude + .00002
    location.longitude = location.longitude + .00002
    io.emit('location', location)
  }, 100)
});

httpServer.listen(3000, () => console.log(":D"));