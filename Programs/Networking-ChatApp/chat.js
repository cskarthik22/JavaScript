const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp(){
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}
// Registering the CONNECTION Listner/handler
// Socket will be creates in duplex mode ( both read/write )
server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id]= socket;
    console.log('Client connected !!!');
    socket.write('Please type your name: \n');
    

    socket.on('data', data => {
       if (!sockets[socket.id]) {
           socket.name = data.trim();
           socket.write(`Welcome  ${socket.name}! \n`);
           sockets[socket.id] = socket;
           return;
       }
        Object.entries(sockets).forEach(([key,cs])=> {
            if(socket.id == key) return;
            cs.write(`${socket.name} ${timestamp()}: `);
            cs.write(data);
        });
        //socket.write(`${socket.id}: `);
        //socket.write(data);
        //socket.write(data,'utf8')
    });

    socket.on('end', ()=> {
        delete sockets[socket.id];
        console.log('Client Disconnected');
    })

    socket.setEncoding('utf8'); // setting globally
})

server.listen(8000, ()=> { console.log('SERVER: Server STARTED...')})