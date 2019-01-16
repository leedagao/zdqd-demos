// const http = require('http');


// let server = http.createServer((req, res) => {
//     console.log('receive req');
//     res.end('ddd');

// });

// server.listen(8989);

// console.log('server start 8989');

let koa=require('./application');

let app=new koa();

app.use((req,res)=>{
    res.end('hihihihihihi');
});

app.listen(8888);