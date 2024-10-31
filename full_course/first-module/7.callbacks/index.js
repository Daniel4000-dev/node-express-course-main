const fs = require('fs');


function person(name, callbackFn) {
console.log(`Hello ${name}`)
callbackFn()
};

function address() {
    console.log(address);
};

person('Sardin bouju', address);

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error in reading file', err);
        return;
    }
    console.log(data);
});