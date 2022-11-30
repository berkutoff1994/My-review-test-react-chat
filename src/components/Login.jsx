import React, {useContext} from "react";
import { Context } from "..";
import {Container, Grid, Box, Button} from '@mui/material';
import firebase from "firebase/compat/app";

function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  }
  
  return (
    <Container>
      <Grid container
        style={{height: window.innerHeight - 50}}
        alignItems={'center'}
        justifyContent={'center'}>
        <Grid 
          style={{width: 400, background: 'lightgray', borderRadius: 10}} 
          container 
          alignItems={'center'} 
          direction={'column'}>
          <Box p={5}>
            <Button onClick={login} variant="contained">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;