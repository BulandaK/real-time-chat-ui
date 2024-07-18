// import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";
import "./LoginPage.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const CustomCssInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "#448FA3",
  },
  "& label": { color: "#448FA3" },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#68C5DB",
  },
  "& .MuiFilledInput-underline:before": {
    borderBottomColor: "#68C5DB",
  },
  "& .MuiFilledInput-root": {
    "&:hover": {
      backgroundColor: "#68C5DB",
    },
    "&.Mui-focused": {
      backgroundColor: "#68C5DB",
      color: "#fff",
    },
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
      <div className="reg-toggle">
        <h3>Real Time Chat</h3>

        <ToggleTheme />
      </div>
      <h2 className="login-title">Login to Real Time Chat</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <CustomCssInput
          label="Email"
          variant="filled"
          {...login("email", { required: true })}
          error={errors.email ? true : false}
        />
        <CustomCssInput
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
