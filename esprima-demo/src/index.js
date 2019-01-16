//源码
function fun1() {
    console.log('fun1');
}
function fun2(opt) {
    if (opt.status == 1) {
        console.log('数据存在');
    }
    if (opt.status == 2) {
        console.log('数据已删除');
    }
}
function fun3(age) {
    if (parseInt(age) >= 18) {
        console.log('ok 你已经成年');
    }
}