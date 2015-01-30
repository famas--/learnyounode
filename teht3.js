var fs = require('fs')

var k = fs.readFileSync(process.argv[2])
var lines = k.toString().split('\n').length -1

console.log(lines);


