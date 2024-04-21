class Dog{
    name:string;
    age:number;

    //constructor被称为构造函数
    //构造函数会在对象创建时调用
    constructor(name:string, age:number) {
        //在实例方法中，this就表示当前的实例
        //在构造函数中当前对象就是当前新建的那个对象
        //可以通过this向构建函数的对象中添加属性
        // console.log(this)
        this.name = name;
        this.age = age;
    }

    bark(){
        // alert('汪汪汪');
        //在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog = new Dog('小黑', 2);
const dog2 = new Dog('小bai', 2);

console.log(dog);
console.log(dog2);

dog.bark();

