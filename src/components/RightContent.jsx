import React, { useState } from "react";
import Label from "./Label";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxLabel,
  ErrorMessage,
  Form,
  SubmitButton,
} from "../styles/styles";
import InputForm from "./Input";

const RightContent = () => {
  const [data, setData] = useState({
    name: "",
    companyName: "",
    password: "",
    confirmPass: "",
    email: "",
    business: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
      react: false,
    },
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData({
        ...data,
        skills: { ...data.skills, [name]: checked },
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkData();
  };

  // 아이디에 특수 문자 (.-_) 만 가능하며 6글자 이상.
  // 회사명에 .- 가능
  // 도메인은 2글자 이상
  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]{6,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  // 비밀번호는 8글자 이상, 최소 특수문자1개, 숫자 1개 포함되어야함
  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });

    if (!isEmailValid(e.target.value)) {
      setError({ ...error, email: "형식이 맞지 않습니다." });
    } else {
      setError({ ...error, email: "" });
    }
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });

    if (!isPasswordValid(e.target.value)) {
      setError({
        ...error,
        password:
          "비밀번호는 8글자 이상이어야하고, 특수문자와 숫자가 포함되어야 합니다.",
      });
    } else {
      setError({ ...error, password: "" });
    }
  };

  const handleConfirmPassword = (e) => {
    setData({ ...data, confirmPass: e.target.value });

    if (data.password !== e.target.value) {
      setError({ ...error, confirmPass: "비밀번호가 일치하지 않습니다." });
    } else {
      setError({ ...error, confirmPass: "" });
    }
  };

  const checkData = () => {
    const { name, password, confirmPass, email } = data;

    if (name === "" || password === "" || confirmPass === "" || email === "") {
      alert("입력되지 않은 값이 있습니다.");
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className='name'>
          <Label text={"Name"} check={true}>
            <InputForm
              name='name'
              type='text'
              placeholder='name'
              data={data}
              handler={handleChange}
            />
          </Label>
          <Label text='Company Name'>
            <InputForm
              type='text'
              name='companyName'
              placeholder='Company Name'
              data={data}
              handler={handleChange}
            />
          </Label>
        </div>
        <Label text='Email' check={true}>
          <InputForm
            name='email'
            type='text'
            placeholder='Email'
            data={data}
            handler={handleEmail}
          />
        </Label>
        {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
        <Label text='Password' check={true}>
          <InputForm
            name='password'
            type='password'
            placeholder='Password'
            data={data}
            handler={handlePassword}
          />
        </Label>
        {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
        <Label text='Confirm Password' check={true}>
          <InputForm
            name='confirmPass'
            type='password'
            placeholder='Confirm Password'
            data={data}
            handler={handleConfirmPassword}
          />
        </Label>
        {error.confirmPass && <ErrorMessage>{error.confirmPass}</ErrorMessage>}
        <div
          style={{ height: "1px", backgroundColor: "white", margin: "5px 0" }}
        ></div>
        <Label text='Business' check={true}>
          <InputForm
            name='Business'
            type='password'
            placeholder='Business'
            data={data}
            handler={handleChange}
          />
        </Label>
        <CheckboxGroup>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              name='html'
              checked={data.skills.html}
              onChange={handleChange}
            />
            HTML
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              name='css'
              checked={data.skills.css}
              onChange={handleChange}
            />
            CSS
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              name='javascript'
              checked={data.skills.javascript}
              onChange={handleChange}
            />
            Javascript
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox
              type='checkbox'
              name='react'
              checked={data.skills.react}
              onChange={handleChange}
            />
            React
          </CheckboxLabel>
        </CheckboxGroup>
        <SubmitButton type='submit' value='Submit'>
          Sign up
        </SubmitButton>
      </Form>
    </div>
  );
};

export default RightContent;
