// import React from "react";
import { Button, colors, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";
import "./LoginPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

const CustomCssInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--third-color)",
  },
  "& label": { color: "var(--third-color)" },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "var(--fifth-color)",
  },
  "& .MuiFilledInput-underline:before": {
    borderBottomColor: "var(--fifth-color)",
  },
  "& .MuiFilledInput-root": {
    "&:hover": {
      backgroundColor: "var(--fifth-color)",
    },
    "&.Mui-focused": {
      backgroundColor: "var(--fifth-color)",
      color: "var(--third-color)",
    },
    "&.Mui": {
      color: "var(--third-color)",
    }
  },
});

const LoginPage = () => {
  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);



  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="login-title">Login to Real Time Chat</h2>
        <CustomCssInput
          className="customCssInput"
          label="Email"
          variant="filled"
          {...login("email", { required: true })}
          error={errors.email ? true : false}
        />
        <CustomCssInput
          className="customCssInput"
          label="Password"
          type="password"
          variant="filled"
          {...login("password", {
            required: true,
            minLength: { value: 8, message: "Min length is 8" },
          })}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
