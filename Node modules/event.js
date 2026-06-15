const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('Message', (msg) => {
    console.log(`Received: ${msg}`);
});
myEmitter.emit('Message', 'Hello Lucas');