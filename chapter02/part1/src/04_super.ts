(function (){
    class Animal{
        name: string;
        constructor(name:string) {
            this.name = name;
        }

        sayHello(){
            console.log('动物在叫～')
        }
    }

    class Dog extends Animal{

        age: number;

        constructor(name:string, age:number) {
            //如果在子类中写了构造函数，在子类构造函数中必须对父类构造函数进行调用
            super(name);
            this.age = age;
            // super();
        }
       sayHello() {
           //在类的方法中，super就表示当前类的父类
           // super.sayHello();

           console.log('向安全区域撤离～')
       }
    }

    const dog = new Dog('张三',4);
    dog.sayHello();

})()