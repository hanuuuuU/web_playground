// Generic Type: Type 자체를 정의시점에서 타입변수로 정의

// 실제 호출될 때 정확한 Type이 결정됨.
function identity<T>(arg: T): T {
  console.log(arg);
  console.log(typeof arg);
  return arg;
}

let result2 = identity<number>(10);
console.log(result2);

let result3 = identity("문자열");

let result4 = identity({
  a: 10,
  b: "abc",
});

interface LengthWise {
  length: number;
}
function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let result5 = loggingIdentity([1, 2, 3]);
let result6 = loggingIdentity({
  length: 3,
  age: 10,
});
