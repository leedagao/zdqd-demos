//将代码转换为代码树
let esprima = require('esprima');
var code='const answer=100';

let token=esprima.tokenize(code);
let codeTree = esprima.parse(code);

console.log(typeof token);
console.log('================');
console.log(codeTree.body[0].type);
console.log(typeof codeTree);