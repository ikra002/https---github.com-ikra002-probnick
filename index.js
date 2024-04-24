const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// npm install materialize-css@next
const PORT = process.env.PORT || 5500

//const http = require('http').Server(app);



app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

app.listen(PORT,() => {
    console.log('Сервер запущен...')
})


