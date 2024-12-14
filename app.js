// Loaie Shalloufi
// Tareq Abu Yunis
// 48-5

// modules and imports
const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const fileDir = path.join(__dirname, '/templates/page.html');

// HTTP Server
const server = http.createServer(async (req, res) => {
    try {
        // Read the HTML file content
        const fileContent = await fs.readFile(fileDir);
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(fileContent);
    }
    catch (err) {
        // If the 
        res.writeHead(404, {"content-type": 'text/html'});
        res.end(`<h1>Page could not be loaded!</h1>`);
    }
});

// Server startup
const PORT = 3000
server.listen(PORT, () => {
    console.log(`The server has started at http://localhost:${PORT}`);
});
