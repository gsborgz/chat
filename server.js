const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join('./app', 'public')));
app.set('views', path.join('./app', 'views/home'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
});

let mensagens = [];

io.on('connection', socket => {
    console.log(`socket conectado: ${socket.id}`);

    socket.emit('previousMessages', mensagens);

    socket.on('enviaMensagem', data => {
        mensagens.push(data);
        socket.broadcast.emit('receivedMessage', data)
    });
});

server.listen(3000, () => {
    console.log("server rodando");
});
