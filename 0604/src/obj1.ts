// 객체의 타이핑.
// 방법2가지
// 1. type 키워드
type User = {
  name: string;
  age: number;

  greet?: () => void; // optional
};
let user: User = {
  name: "John",
  age: 30,
};

let user2: User = {
  name: "John",
  age: 30,

  greet() {
    console.log("greet!");
  },
};
// let user3: User = {
//   name: 1,
//   age: 30,
// };

// 2. interface
interface IUser {
  name: string;
  age: number;
  greet?: () => void;
}

let user4: IUser = {
  name: "John",
  age: 30,
};

let user5: IUser = {
  name: "Hey",
  age: 50,
  greet() {},
};

// 타입 확장 (타입 상속)
// 타입키워드에서 확장은 & 사용
type Teacher = User & {
  subject: string;
};
const teacher1: Teacher = {
  name: "John",
  age: 30,
  subject: "math",
};

// interface에서 확장은 extends 키워드 사용
interface ITeacher extends IUser {
  subject: string;
}
//   const teacher2: ITeacher = {

//   };
