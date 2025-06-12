import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  color: white;
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  &:hover {
    background-color: blue};
  }
`;

const LargeButton = styled(BaseButton)`
  font-size: 20px;
  padding: 15px 30px;
`;
export default function StyledExample() {
  return (
    <div>
      StyledExample
      <BaseButton primary={true}>클릭</BaseButton>
      <BaseButton primary={false}>클릭(Primary=false)</BaseButton>
      <div>
        <LargeButton primary={false}>큰 버튼</LargeButton>
      </div>
    </div>
  );
}
