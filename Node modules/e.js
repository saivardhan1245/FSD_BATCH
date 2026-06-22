const eventEmitter = require('events')
var e = new eventEmitter()
var fun = (msg)=>{
    console.log(msg)
}
e.on("myevent",fun)
