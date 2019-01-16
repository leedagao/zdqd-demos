//价值1亿的Ai代码
console.log('我是智能机器人');
process.stdin.on('data', (e) => {
    let d = Buffer.from(e).toString('utf-8')
            .replace(/吗/, '').replace(/\?/, '!').replace(/\？/, '!'); d = d.indexOf('输入法')>-1?'请重启':d;
    console.log(d);
});