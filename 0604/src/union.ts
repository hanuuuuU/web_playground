type Member = {
  name: string;
};

type NormalMember = Member & {
  age: number;
};

type CompanyMember = Member & {
  companyTel: string;
};

// MemberType은 NormalMember일 수도 CompanyMember일 수도 있음.
type MemberType = NormalMember | CompanyMember;

function register(member: MemberType): boolean {
  const name = member.name;

  if ("age" in member) {
    // member를 NormalMember로 추론합니다.
    const age = member.age;
    // 회원가입 진행
  }
  if ("companyTel" in member) {
    // member를 CompanyMember로 추론합니다.
    const companyTel = member.companyTel;
    // 회원가입 진행
  }
  //   const age = member.age;
  return true;
}
register({
  name: "John",
  age: 10,
});

register({
  name: "John",
  companyTel: "0200000000",
});
