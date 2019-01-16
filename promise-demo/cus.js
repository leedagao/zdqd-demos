console.log('kjkjkjkj');
setTimeout(() => {
    console.log('0');
}, 0);
function Pro(callback) {

    let self = this;
    this.resolveArr = [];

    function resolve(res) {
        //console.log('11');
        setTimeout(() => {
            for (let i = 0; i < self.resolveArr.length; i++) {
                self.resolveArr[i](res);
            }
        }, 0);
      

        //console.log(self.resolveArr.length);
    }
    callback(resolve);
}

Pro.prototype.then = function (resolveCallback) {
    this.resolveArr.push(resolveCallback);
    //console.log(this.resolveArr);
}

let p = new Pro(resolve => {
    console.log('1');
    for (let i = 0; i < 100000; i++) {
        i === 9999 && resolve('3');
    }

    console.log('2');
});

p.then(v => {
    console.log(v);
});