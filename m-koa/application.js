
const http=require('http');


class Koa {
    constructor(){
        super();
        this.fn=null;
    }

   
    use(fn){
        this.fn=fn;
    }

    listen(...args){
       let server = http.createServer(...args);
       server.listen(...args);
    }

 
}