const path = require('path');

console.log('Directory name:', path.dirname(__filename));

console.log('File name', path.basename(__filename));

console.log('file extension', path.extname(__filename));

const joinPath = path.join('/user', 'documnets', 'node', 'projects');
console.log("Joned path", joinPath);

const resolvePath = path.resolve('user', 'document', 'node', 'project');
console.log('Resolve path:', resolvePath);

const normalizePath = path.normalize('/user/.documents/../node/projects');
console.log("normalizePath", normalizePath);