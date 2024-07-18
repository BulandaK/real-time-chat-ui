// import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./RegisterPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";

type Inputs = {
  name: string;
  surname: string;
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

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="reg-container">
      <div className="reg-toggle">
        <h3>Real Time Chat</h3>

        <ToggleTheme />
      </div>

      <h2 className="reg-form-title">Create an account to Real Time Chat</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
        {/* register your input into the hook by invoking the "register" function */}

        <CustomCssInput
          label="name"
          {...register("name", { required: true })}
          variant="filled"
          error={errors.name ? true : false}
        />
        <CustomCssInput
          label="surname"
          variant="filled"
          {...register("surname", { required: true })}
          error={errors.email ? true : false}
        />
        <CustomCssInput
          label="email"
          variant="filled"
          {...register("email", { required: true })}
          error={errors.email ? true : false}
        />

        <CustomCssInput
          label="password"
          type="password"
          variant="filled"
          {...register("password", {
            required: true,
            minLength: { value: 8, message: "min length is 8" },
          })}
          helperText={errors.password?.message}
          error={errors.email ? true : false}
        />

        {/* <input type="submit" value="register" /> */}
        <Button type="submit">register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
