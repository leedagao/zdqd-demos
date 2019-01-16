/**
 * 使用eslint api进行代码规范检测
 * 1.获得检测的信息
 * 
 */

var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine();

// lint myfile.js and all files in lib/
let file = process.cwd() + '/eslint-demo/foo.js';
var report = cli.executeOnFiles([file]);
let { errorCount, warningCount, fixableErrorCount, fixableWarningCount, results: [{ messages}]} = report;

console.log('11 messages-', messages);
console.log('errorCount-', errorCount);
console.log('11 warningCount-', warningCount);