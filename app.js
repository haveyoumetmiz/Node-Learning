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