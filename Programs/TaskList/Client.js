const EventEmitter = require("events")
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require("./Server")(client);
server.on('response', (resp)=> {
    process.stdout.write('\u001B[2J\u001B[0;0f')
    console.log(`Resp: ${resp}`);
    process.stdout.write('\n\> ');
});

let command, args;
r1.on('line',(input) => {
    [command, ...args] = input.split(' ');
   // client.emit('command',input)
    client.emit('command',command,args)
})