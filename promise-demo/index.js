console.log('1');



let t = setInterval(function () {
    console.log('5');
}, 0);

setTimeout(function () {
    clearInterval(t);

}, 0);

setTimeout(function () {
    console.log('2');
}, 0);



console.log('3');

setTimeout(function () {
    console.log('4');
}, 0);


new Promise((resolve) => {
    console.log('promise' + 6);
    setTimeout(() => {
        resolve('6');
    }, 0);
  
}).then(v => {
    console.log('then' + v);

});

async function atest() {
    return 7;
}

async function getTest() {
    let d = await atest();
    console.log(d);
}

getTest();


function Pro(fun) {

    this.status = 'PEDDING';
    this.data = null;
    this.onResolvedCallback=[];
    this.onRejectCallback=[];

    fun(resolve, reject);


    function resolve(res) {
        this.data=res;
        console.log('pro resove ' + res);
    }

    function reject(error) {
        console.log('pro reject ' + error);
    }

}

Pro.prototype.then = function (resolveFn,rejectFn) {
    console.log('then exec');
    resolveFn(this.data);
}


// new Pro((resolve, reject) => {
//     console.log('test Pro');
//     resolve('8');
//     reject('8');
// }).then(res => {
//     console.log('get data',res);
// });