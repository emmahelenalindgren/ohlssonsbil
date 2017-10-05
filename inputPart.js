 $(function () {
    var socket = io();
    socket.on("picked", (msg) =>{
          $("#picked").append($("<li>").text(msg));
      })
  });
