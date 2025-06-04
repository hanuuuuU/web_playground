function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 5));
console.log("-".repeat(10));

const multiply = function (a: number, b: number): number {
  return a * b;
};
const multiply2: (a: number, b: number) => number = (a, b) => {
  return a * b;
};

type MultiplyFunc = (a: number, b: number) => number;
const multiply3: MultiplyFunc = (a, b) => {
  return a * b;
};
