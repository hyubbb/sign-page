import { LabelStyle } from "../styles/styles";

const Label = ({ text, children, check = false }) => {
  return (
    <LabelStyle checked={check}>
      <span className='text'>{text}</span>
      {children}
    </LabelStyle>
  );
};
export default Label;
