const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

const content = 'I am 22 yrs old!';
fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }   
    console.log('File written successfully:',content);
});



const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, I am Mizhab K Ansar!\n');
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
}   );

const path = require('path');

const directory = 'C:/Users/MizhabKAnsar/Projects/Node-Learning';
const fileName = 'info.txt';
const fullPath = path.join(directory, fileName)

console.log('Full path:', fullPath);




const os = require('os');

console.log('Platform:', os.platform() );
console.log('Architecture:', os.arch() );
console.log('CPU Cores:', os.cpus().length );
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());


const url = require('url');

const myURL = new URL('https://www.example.com:8080/path/name?query=string#hash');
console.log('Hostname:', myURL.host);
console.log('pathname:', myURL.pathname);
console.log('search params:', myURL.searchParams.get('query'));
console.log('hash:', myURL.hash);
console.log('href:', myURL.href);


const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('Hello, World!').digest('hex');
console.log('Hash:',hash);

const sayHello = require('./greetings');
const message = sayHello('Mizhab K Ansar');
console.log(message);


const math = require('./math');
console.log('Addition:', math.add(5, 3));
console.log('Subtraction:', math.subtract(5, 3));
console.log('Multiplication:', math.multiply(5, 3));
console.log('Division:', math.divide(5, 3));