import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  border: 1px solid black;
  position: relative;
  gap: 0.5rem;
  padding: 2rem;
  text-align: left;
  background-color: #000;
  color: white;
  height: min-content;
`;

export const Content = styled.article`
  display: flex;
  gap: 2rem;

  .left,
  .right {
    flex: 1;
  }

  .left {
    .contents {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .title {
        font-size: 1.2rem;
      }
      .medium-text {
        font-size: 0.9rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .name {
    display: flex;
    gap: 1rem;
    label {
      flex: 1;
    }
  }
`;

export const LabelStyle = styled.label`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  ${(props) =>
    props.checked
      ? `
        span::after {
          content: "*";
          color: red;
        }
      `
      : ""}
`;
export const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  padding: 0 10px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #666;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #555;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
