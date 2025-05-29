let arr = ["a","b","c","d","e"];
const[v1, v2, ...rest]=arr;
console.log(v1); //a
console.log(v2); //b
console.log(rest); //['c','d','e']
// 배열 중 일부를 묶어서 받는 것이 가능하다.

const options = {
    title: "Menu",
    width: 100,
    height: 200,
    k1: "v1",
    k2: "v2"
}
const height = 1000;
const {title, width, height:h, ...r} = options;

console.log(title); // "Menu"
console.log(width); // 100
console.log(h); // 200
console.log(r); // { k1: "v1", k2: "v2"}