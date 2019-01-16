//网页截图

var webshot = require('node-webshot');
var fs = require('fs');

var options = {
    screenSize: {
        width: 750
    }, shotSize: {
        width: 750
        , height: 'all'
    }
    , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
        + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

let url ='m.xin.com/x1k2a5ow45/che30219875.html?cityid=201&optoken=ab_cache_key_bb559554fc9c97761df9b194f5ab1cd1';
//let url ='http://localhost:6001/test/test';
async function downPage(url,imageName) {

    return new Promise((resolve)=>{
        webshot(url, imageName, options, function (err) {
            // screenshot now saved to hello_world.png 
            resolve({
                err:err,
                msg:'down load'
            });
        });
    });
}

async function pageImg() {
    
        let time = +new Date();
        let data = await downPage(url,'1111.png');
        console.log(data);
        console.log((+new Date()) - time, 'ms');
    
}


pageImg();