const http = require('http');
const app = require('./index');

http.createServer(async (req, res) => {
    let params = '';
    if (req.url.includes('?')) {
        params = req.url.split('?')[1];
    }
    params = query2object(params);
	
    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8;',
        'Access-Control-Allow-Origin': '*' //임시로 넣음
    });
    res.write(JSON.stringify(await app(params.lineId), null, 4));
    res.end();
}).listen(80);


function query2object(query) {
    if (query.trim() == '') return {};
    const result = {};
    const data = decodeURI(query).split('&');
    for (let n = 0; n < data.length; n++) {
        const datum = data[n].split('=');
        result[datum[0]] = datum[1];
    }
    return result;
}
