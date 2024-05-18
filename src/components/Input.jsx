import React from "react";
import { Input } from "../styles/styles";

const InputForm = ({ name, type, data, placeholder, handler }) => {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      value={data[name]}
      onChange={(e) => handler(e)}
    />
  );
};

export default InputForm;
