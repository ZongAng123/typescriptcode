"use strict";
(function () {
    /*
    *定义类时，可以使类去实现一个接口
    *实现接口就是使类满足接口的需求
    * */
    class myClass {
        //构造函数
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
    const obj = new myClass('123');
    obj.sayHello();
})();
