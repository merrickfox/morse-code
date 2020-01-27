const readline = require('readline');
const messageTools = require('./encode')

let lineReader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

console.log('Please type your message and then press ENTER\n');

lineReader.on('line', (line) => {
	console.log(`Encoded message: ${messageTools.encode(line)}\n`);
	console.log('Please type your message and then press ENTER\n');
});
