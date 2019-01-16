let fs  = require('fs');
const esprima = require('esprima');//JS语法树模块
const estraverse = require('estraverse');//JS语法树遍历各节点
const escodegen = require('escodegen');//JS语法树反编译模块




async function  getAst(jsFile) {
  
    let jsCode;
    return new Promise((resolve)=>{
        fs.readFile(jsFile, (error, data) => {
            jsCode = data.toString();
            resolve(esprima.parseScript(jsCode));
        });
    });
  
}

/**
 * 设置全等
 */
function toEqual(node) {
    if (node.operator === '==') {
        node.operator = '===';
    }
}
/**
 * 把parseint改为标准方法
 * @param {节点} node 
 */
function setParseint(node) {
    if (node.type === 'CallExpression' && node.callee.name === 'parseInt' && node.arguments.length===1){
        node.arguments.push({
            "type": "Literal",
            "value": 10,
            "raw": "10"
        });
    }
}

/**
 * 删除console
 */
function delConsole(node) {
    if (node.type === 'ExpressionStatement' && node.expression.type === 'CallExpression' && node.expression.callee.object.name==='console') {
        node.expression.callee.object.name = '//console';
    }
}


/**
 * 
 * @param {遍历语法树} ast 
 */
function walkIn(ast){
    estraverse.traverse(ast, {
        enter: (node) => {
            toEqual(node);
            delConsole(node);
            setParseint(node);
        }
    });
}



function  writeCode(file,data) {
    fs.writeFile(file,data,(error)=>{
        console.log(error);
    });
}


async function Main(){
    let file = process.cwd() + '/esprima-demo/src/index.js';
    let jsCode =await getAst(file);
    walkIn(jsCode);
    setTimeout(() => {
        let distCode = escodegen.generate( esprima.parseScript( escodegen.generate(jsCode)));
        console.log(distCode);

        writeCode(file.replace('/src/','/dist/'),distCode);
    }, 500);
 
}


Main();
