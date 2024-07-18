//import * as React from 'react';
import "./LoginForm.css"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const LoginForm = () => {
  return (
    <div className="login-form-container">


      <form action="POST" >
        <TextField id="outlined-basic" label="Login" variant="outlined" />
        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
        <Button variant="contained" endIcon={<SendIcon />}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;