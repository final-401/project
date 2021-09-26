import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {FormControl,InputLabel,MenuItem,Select} from '@material-ui/core';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function SignUp() {

  const [role,setRole]=useState('')
  const theme = createTheme();
  const handleChange =e =>setRole(e.target.value)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      user: data.get('user'),
      email: data.get('email'),
      first_name: data.get('firstname'),
      last_name: data.get('lastname'),
      address: data.get('address'),
      phone: data.get('phone'),
      role: data.get('role'),
      profile: data.get('profile')
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
                <Grid item xs={12}  >
                    <TextField
                      autoComplete="fname"
                      name="firstname"
                      required
                      fullWidth
                      id="firstname"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="lastname"
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="user"
                      required
                      fullWidth
                      id="user"
                      label="Username"
                      autoFocus
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="fname"
                      name="address"
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="fname"
                      name="phone"
                      required
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      autoFocus
                      
                    />
                  </Grid>
                  <Grid item xs={12} >
                      <FormControl fullWidth>
                        <InputLabel id="role">Role</InputLabel>
                        <Select
                          name='role'
                          id="role"
                          value={role}
                          label="role"
                          onChange={handleChange}
                        >
                          <MenuItem value={'doctor'}>doctor</MenuItem>
                          <MenuItem value={'customer'}>customer</MenuItem>
                          
                        </Select>
                      </FormControl>
                  </Grid>
                  <Grid item xs={12}  justifyContent="center">
                  <InputLabel id="profile">Profile</InputLabel>
                    <input 
                    type='file'
                    name="profile"
                    required
                    fullWidth
                    id="profile"
                    label="profile"
                    autoFocus
                    ></input>
                  </Grid>
                
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="center" >
                  <Grid item>
                    <Link href="/SignIn" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}