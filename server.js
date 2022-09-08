const http = require("http");
const { routes } = require("./route");

// membuat server dengan module nodejs createServer
http.createServer((req, res) => {
    const url = req.url;
    if (url === "/about") {
        routes("./about.html", res);
    } else if (url === "/contact") {
        routes("./contact.html", res);
    } else if (url === "/") {
        routes("./index.html", res);
    } else {
        res.writeHead(404);
        res.write("halaman tidak ditemukan");
        res.end();
    }
}).listen(5000, () => {
    console.log(`Server running at PORt: ${5000}`);
});
