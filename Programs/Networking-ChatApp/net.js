const server = require('net').createServer();
let counter = 0;
let sockets = {};
// Registering the CONNECTION Listner/handler
// Socket will be creates in duplex mode ( both read/write )
server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id]= socket;
    console.log('CLIENT -> SERVER: Client connected !!!');
    socket.write('SERVER -> CLIENT:  Welcome new client \n');
    

    socket.on('data', data => {
       
        Object.entries(sockets).forEach(([key,cs])=> {
            cs.write(`${socket.id}: `);
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