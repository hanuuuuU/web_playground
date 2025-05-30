// commonjs의 module import 방식은 require를 사용한다
const module1=require('./commonjs-module.js');

console.log("module1 import");
const result = module1.add(10,20);
console.log(result);