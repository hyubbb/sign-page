import React, { useState } from "react";

const TextField = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        value={value}
        type='text'
        placeholder={placeholder}
        className='text-input'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const withLabel = (Component) => {
  return ({ children, ...rest }) => {
    return (
      <div>
        <label className='text-label'>{children}</label>
        <Component {...rest} />
      </div>
    );
  };
};

const withError = (Component) => {
  return ({ error = 0, ...rest }) => {
    return (
      <div>
        <Component {...rest} />
        <div className='error'>{error}</div>
      </div>
    );
  };
};

function Signin() {
  const TextFieldWithLabel = withError(withLabel(TextField));
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <TextFieldWithLabel
        value={value}
        onChange={setValue}
        placeholder='please enter...'
        error={error}
      >
        <h2>input text</h2>
      </TextFieldWithLabel>
    </>
  );
}

export default Signin;
