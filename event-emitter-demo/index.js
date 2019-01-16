//自定义事件机制 注册 触发 并传递参数
const EventEmitter = require('./event-emitter');

let event = new EventEmitter();

event.on('click',(a1,a2)=>{
    console.log('click emit');
    console.log(a1,a2);
});

event.on('click', (a1,a2) => {
    console.log('1');
    console.log(a1, a2);
});


event.emit('click',100,200);