let p=new Promise(resolve=>{
    console.log('1');
    for(let i=0;i<10000;i++){
        i === 9999 && resolve('3');
    }
    console.log('2');
});

p.then(res=>{
    console.log(res);
});

