const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io');

app.use(express.static(path.join('./app', 'public')));
app.set('views', path.join('./app', 'views/home'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
});

server.listen(3000, () => {
    console.log("server rodando");
});
