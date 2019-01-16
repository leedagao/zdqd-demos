var webshot = require('node-webshot');

var options = {
    screenSize: {
        width: 750
    }
    , shotSize: {
        width: 750
        , height: 'all'
    }
    , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
        + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

webshot('m.yichenggou.com/carent/details?city_id=201&source=&os=&channel=&mode_id=90018447&series_id=3242', 'flickr.jpeg', options, function (err) {
    console.log(err);    
// screenshot now saved to flickr.jpeg 
}); 
