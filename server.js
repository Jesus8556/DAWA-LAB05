const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
})
//conexion socket

io.on('connection',function(socket){
    console.log('Usuario conectado');

    //EXCUCHAR 'CHAT MENSAJE 1' PARA CHAT 1
    socket.on('chat message 1',function(msg){
        console.log('Mensaje de chat 1:'+ msg);
        io.emit('chat message 1', msg);
    })

    socket.on('chat message 2',function(msg){
        console.log('Mensaje de chat 2:'+ msg);
        io.emit('chat message 2', msg);
    })

    socket.on('disconnect',function(){
        console.log('Usuario desconectado');
    });
});

http.listen(3000,function(){
    console.log('Servidor escuchando en 3000')
})