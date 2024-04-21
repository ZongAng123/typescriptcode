"use strict";
// function fn(a:any):any{
//     return a;
// }
/*
* 定义函数或是类时，如果遇到类型不明确就可以使用泛型
* */
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
let result = fn(10); //不指定类型，TS可以自动对类型进行推断
let result2 = fn('赵高'); //指定泛型
console.log(result);
console.log(result2);
//泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, '范增');
fn2(567, '陈余');
//T extends Inter 表示泛型T必须是Inter实现类(子类)
function fn3(a) {
    return a.length;
}
fn3({ length: 1 });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('张三丰');
console.log(mc);
