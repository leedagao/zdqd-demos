const phantom = require('phantom');

var startTime = (+ new Date())

var page  = require('webpage').create();


var url = 'https://m.xin.com/40d0arywy9/che37941929.html';
var filePath = 'detail.png';

page.viewportSize = { width: 750, height: 1000 };
page.settings.userAgent = 'Mozilla/5.1 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';

var requestsArray = [];

page.onResourceRequested = function(requestData, networkRequest) {
  requestsArray.push(requestData.id);
};

page.onResourceReceived = function(response) {
  var index = requestsArray.indexOf(response.id);
  requestsArray.splice(index, 1);
};

page.evaluate(function() {
  //有些页面是做了懒加载，因此将滚动条拖动到某个范围值得时候，图片才会去加载
  window.scrollTo(0, 10000);
});

page.open(url, function(status) {
  page.evaluate(function() {
    window.scrollTo(0, 10000)
  });
  var interval = setInterval(function () {
    page.evaluate(function() {
      window.scrollTo(0, 10000)
    });
    if(requestsArray.length === 0) {
      clearInterval(interval);
      page.render(filePath, {format: 'jpeg', quality: '100'});
      console.log(status);
      console.log((+ new Date() - startTime))
      phantom.exit();
    }
  }, 500);
});