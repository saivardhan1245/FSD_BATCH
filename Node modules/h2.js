
const http = require('http');
const server = http.createServer((req, res) => {
   
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello from saivardhan Node.js Server Module!');
    res.end();
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
