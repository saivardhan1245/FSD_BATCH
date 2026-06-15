const http = require('http');
const myServer = http.createServer((req, res) => {
    res.end('Hello Lucas, this is your first HTTP server');
});
myServer.listen(8080, () => {
    console.log('Lucas, your server is running on port 8080');
});