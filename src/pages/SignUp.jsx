import React from "react";
import { Container, Content } from "../styles/styles";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";

const ContentRightLeft = ({ left, right }) => {
  return (
    <>
      <div className='left'>{left}</div>
      <div className='right'>{right}</div>
    </>
  );
};

const withContent = (Component) => {
  return ({ children, ...rest }) => {
    return (
      <Content>
        <Component {...rest} />
      </Content>
    );
  };
};

const ContextBox = withContent(ContentRightLeft);
const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <h1>Sign Up</h1>
        <ContextBox left={<LeftContent />} right={<RightContent />} />
      </Container>
    </div>
  );
};

export default SignUp;
