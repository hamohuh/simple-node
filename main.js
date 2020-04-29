let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);

    let fileName;
    if (q.pathname === '/') {
        fileName = './index.html';
    } else if (q.pathname === '/about.html') {
        fileName = './about.html'
    } else if (q.pathname === '/contact.html') {
        fileName = './contact.html'
    } else {
        fileName = './404.html'
    }


    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('File Not Found');
            return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
