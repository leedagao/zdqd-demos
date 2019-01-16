//使用node-sass处理css

let sass = require('node-sass');

sass.render({
    file:process.cwd()+'/node-sass/test.css',
    outFile:'cc.css',
    outputStyle:'compact',
    sourceComments:true,
    sourceMap:true,
    options:{
        outputStyle:'compact',
        outFile:'aa.css'
    }
},(err,res)=>{
    console.log(err);
    console.log(res.css.toString());
})