const lodash = require('lodash');

const names = ['dan', 'dav', 'han'];
const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize)