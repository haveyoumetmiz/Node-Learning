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


const lodash = require('lodash');
const numbers = [1, 2, 3, 4, 5];
const reversed = lodash.reverse([...numbers]);
const shuffled = lodash.shuffle(numbers);

console.log('Original:', numbers);
console.log('Reversed:', reversed);
console.log('Shuffled:', shuffled);

const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8'});

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading file.');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});


const writeablestream = fs.createWriteStream('output2.txt');
writeablestream.write('Hello, ');
writeablestream.write('World!');
writeablestream.end();

writeablestream.on('finish', () => {
    console.log('Finished writing to file.');
});

readableStream.pipe(writeablestream);

writeablestream.on('finish', () => {
    console.log('File Copied successfully using pipe.');
});


const readline = require('readline')
const rl = readline.createInterface({input: readableStream})

rl.on('line', (line) => {
    console.log('Line:', line); 
})

rl.on('close', () => {
    console.log('Finished reading lines.');
});



fs.mkdir('newDirectory', (err) => {
    if (err) {
        return console.error('Error creating directory:', err);
    }
    console.log('Directory created successfully.');

})

fs.mkdirSync('newDirectory2');
console.log('Directory created successfully using mkdirSync.');