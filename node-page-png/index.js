console.log('ddd');
const phantom = require('phantom');

(async function() {
  let startTime = (+ new Date())
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });
  page.setting('viewportSize', {
      width: 750,
      height: 2000
  });
  page.setting('userAgent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')

  const status = await page.open('https://m.xin.com/40d0358dy9/che62043654.html?cityid=201&optoken=ab_cache_key_c59e47244307a3f04183e3de60fce31b');
  page.render('detail.png')
  console.log((+ new Date()) - startTime);
  await instance.exit();
})();