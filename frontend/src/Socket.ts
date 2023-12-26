const socket = new WebSocket("ws://localhost:8080/ws");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Connection established");

  socket.send("/letters")
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});

export default socket
