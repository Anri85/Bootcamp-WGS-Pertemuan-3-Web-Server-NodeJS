const fs = require("fs");

const routes = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });
};

module.exports = { routes };
