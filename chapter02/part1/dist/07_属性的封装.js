"use strict";
(function () {
    //定义一个表示人的属性
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
        * getter方法用来读取属性
        * setter方法用来设置属性
        *  - 他们被称为属性的存取器
        *
        * */
        //定义一个方法，用来获取name属性
        // getNmae(){
        //     return this._name;
        // }
        //定义方法，用来设置name属性
        // setNmae(value:string){
        //     this._name = value;
        // }
        // getAge(){
        //     return this._age;
        // }
        // setAge(value:number){
        //     //判断年龄是否合法
        //     if(value >= 0){
        //         this._age = value;
        //     }
        // }
        //TS中设置getter方法的方式
        get name() {
            console.log('get name(执行了！');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('章邯', 18);
    /*
    * 现在属性实在对象中设置，属性可以任意的被修改
    * 属性可以任意修改会导致对象中的数据变得非常不安全
    * */
    // per._name = 'John';
    // per._age = 38;
    // per.setNmae('猪八戒');
    // per.setAge(-33);
    per.name = '张良';
    per.age = 33;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 33;
    class C {
        //可以将属性直接定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('刘邦', 68);
    console.log(c);
})();
