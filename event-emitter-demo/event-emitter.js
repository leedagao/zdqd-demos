//模拟实现事件触发机制

class EventEmitter{

    constructor(){
       // super();
        this.arrEventList = {};
    }

    on(eventName, fn){
        this.arrEventList[eventName] || (this.arrEventList[eventName] = []);

        this.arrEventList[eventName].push(fn);
    }

    emit(eventName,...args){
        console.log('args',args);
        let fns = this.arrEventList[eventName];
        fns && fns.forEach(item => {
            item && item.apply(null,args);
        });
    }

}

module.exports=EventEmitter;