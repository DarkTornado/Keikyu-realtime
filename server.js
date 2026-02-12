const http = require('http');
const app = require('./index');

http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8;',
        'Access-Control-Allow-Origin': '*' //임시로 넣음
    });
    res.write(JSON.stringify(await app(), null, 4));
    res.end();
}).listen(80);