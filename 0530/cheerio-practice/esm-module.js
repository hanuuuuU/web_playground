function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}
// export function sub(num1,num2){
//     return num1-num2;
// }

class Sample{
    constructor(name){
        this.name=name;
    }
}
// import 시 다음처럼 사용.
// import {add, sub} from '<module-name>'
export {add, sub}

// import 시
// import <변수 이름> from '<module-name>'
// eg.) import S from './esm-module.js'
// export default는 반드시 하나씩만 가져온다
export default Sample;

