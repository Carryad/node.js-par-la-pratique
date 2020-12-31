const http = require('http');

const port = 3000;

const scan = (port) => {
    http.get(`http://localhost:${port}/ping`, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(chunk);
            console.log(`Result: find port ${port} is open`);
        });
    }).on('error', (e)=> {
        console.error(`Got error : ${e.message}`);
    });
}

for (let port = 3000; port<= 4000; port++){
    scan(port);
}