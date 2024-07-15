// import React from "react";
import { Button, TextField } from "@mui/material";
import "./RegisterPage.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

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
      <h2 className="reg-title">Create an account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
        {/* register your input into the hook by invoking the "register" function */}

        <TextField
          label="name"
          {...register("name", { required: true })}
          variant="outlined"
          error={errors.name ? true : false}
        />
        <TextField
          label="surname"
          {...register("surname", { required: true })}
          variant="outlined"
        />
        <TextField label="email" {...register("email", { required: true })} />

        <TextField
          label="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: { value: 8, message: "min length is 8" },
          })}
          helperText={errors.password?.message}
        />

        {/* <input type="submit" value="register" /> */}
        <Button type="submit">register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
