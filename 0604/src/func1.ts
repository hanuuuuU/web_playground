// 물음표는 입력해도 되고, 안해도 된다는 뜻
function greet(name: string, greeting?: string): string {
  // gretting이 있으면 greeting 값, 없으면 Hello
  return `${greeting || "Hello"}, ${name}`;
}

console.log(greet("hanu", "안녕하세요"));
console.log(greet("hanu"));

// greet(); // 에러 발생
// greet("hanu", "안녕하세요", "반갑습니다."); // 에러 발생
