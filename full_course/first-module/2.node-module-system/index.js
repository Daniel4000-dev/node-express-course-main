// module.exports -> export
// require -> import

const firstModule = require('./first-module');

console.log(firstModule.add(10, 20));

try {
    console.log('trying to divide by zero');
    let result = firstModule.divide(100, 0)
    console.log(result)
} catch(error) {
console.log('Caught an error', error.message)
}

// module wrapper

(
    function(exports, require, module, __fiilename, __dirname) {
        // your module code goes here
    }
)