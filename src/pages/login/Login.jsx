import React,{useState} from 'react';
import './login.css';



function Login(){

  const [username,setusername]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [Login,setLogin]=useState(false);
  
  const handlelogin = (e) => {
    e.preventDefault()

    if(!Validateusername(username))
    {
        window.alert("Enter Valid Username:The string must start with a letter.Should be between 2 and 19 characters.");
        return;
    }


    setLogin(true)
  }


  if(Login)
  {
    return(
      <h1>Congratulations you have logged in</h1>
    )
  }

  
  
  const Validateusername = () => {
    return /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/.test(username)
  }
 
  const ValidatePassword= () => {
    return /^(?=.*[a-z])$'/.test(password)
  }
  
 

  
  
  return (
    <div>
    <h3 className='title'>Book my Stay</h3>
    <div className='Login' >
    <form onSubmit={handlelogin}>
      <h1 className='name'>LOGIN</h1>
      <hr className='rule' ></hr>
      <br></br>
      <br></br>

      <div className='Username'>
      
      <img
       src="https://logodix.com/logo/1727578.png"
       alt=""
       style={{ width: '25px', height: '25px' }}
       />
      <input type='text' 
       className='name' 
       placeholder='Username'
       value={username}
       onChange={(e) => setusername(e.target.value)}
       required></input>
       <br></br>
      </div>

      <div className='Email'>
      <img
            src="http://cdn.onlinewebfonts.com/svg/img_500737.png"
            alt=""
            style={{ width: '25px', height: '25px' }}
            />
      <input type='email' 
       className='email' 
       placeholder='Email'
       value={email}
       onChange={(e) => setemail(e.target.value)}
       required  title='must include .com'></input>
       <br></br>
       </div>
       

      <div className='Password'>
      <img
       src="https://pluspng.com/img-png/png-lock-picture-big-image-png-2074.png"
       alt=""
       style={{ width: '25px', height: '25px' }}/>
      <input type='password' 
       className='password' 
       placeholder='Password'
       value={password}
       onChange={(e)=>setpassword(e.target.value)}
       required></input>
       <br></br>
       </div>

       <div className='SignUp'>
        <p>Not a user yet? <a href="./Registration.js">Sign Up</a></p>
      </div>
       <button type='submit'>Login</button>

    </form>
    </div>

  </div>
  )
  
}

export default Login
/*import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        BookMyStay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}*/