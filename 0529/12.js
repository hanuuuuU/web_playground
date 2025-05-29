// prototype
function Animal(name){
    this.name = name;
    this.hungry = 0;
}

/**
 * 메서드 정의는 생성자 함수의 prototype이라는 객체에 정의.
 * prototype은 객체가 모두 공유할 함수의 집합
 */
Animal.prototype.eat = function (){
    console.log(`${this.name }이 먹는다.`);
    this.hungry -= 10;
}
Animal.prototype.run = function (){
    console.log(`${this.name}이 달린다.`);
    this.hungry += 10;
}

/**
 * function을 정의하고 new 키워드와 함께 호출하면 그 즉시 객체
 * 이 때 해당 function은 생성자
 */

/**
 * 인스턴스의 __proto__가 해당하는 생성자 함수의 prototype을 참조.
 */


/**
 * 객체는 호출된 속성 중 본인이 가지지 않은 것이 접근 되면, 
 * __proto__를 참조하여 해당하는 속성이 있는지 확인.
 */


/**
 * 상속.
 */
function Rabbit(name, color){
    // console.log(arguments)
    Animal.apply(this, arguments);
    this.color = color;
}

/**
 * Rabbit이 공유할 prototype은 Animal의 protype을 기반해서 만든다.
 */
Rabbit.prototype = Object.create(Animal.prototype);
// 새로운 메서드를 작성한다.
Rabbit.prototype.newFunction = function(){
    console.log("새로운 기능!");
}

/**
 * 특수한 키워드.
 * this, arguments
 */
const rabbit = new Rabbit("토깽이", "red");
console.log(rabbit.__proto__)
rabbit.newFunction();
rabbit.run();
rabbit.eat();