"use strict";
(function () {
    /*
    * 以abstract开头的类是抽象类
    * 抽象类和其他类区别不大，只是不能用来创建对象
    * 抽象类就是专门用来被继承的类
    * 抽象类中可以添加抽象方法
    * */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('向安全区域撤离～');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('张三');
    dog.sayHello();
    const cat = new Cat('王二');
    cat.sayHello();
    // let an = new Animal('蛇')
})();
