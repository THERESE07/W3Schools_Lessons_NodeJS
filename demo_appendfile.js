var fs = require('fs');
fs.appendFile('mynewfile1', 'This is my text', function (err){
    if(err) throw err; 
    console.log('Updated!');
});