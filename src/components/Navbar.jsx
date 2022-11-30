import React, {useContext} from "react";
import {AppBar, Toolbar, Grid, Button} from '@mui/material';
import {useAuthState} from 'react-firebase-hooks/auth';
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";
import {Context} from "../index";

function Navbar() {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <AppBar position="static">
      <Toolbar variant={'dense'}>
        <Grid container justifyContent={"flex-end"}>
          {user 
          ? //шорткат
          <Button onClick={() => auth.signOut()} variant="contained">Выйти</Button> 
          : 
          <NavLink style={{textDecoration: 'none'}} to={LOGIN_ROUTE}>
            <Button variant="contained">Логин</Button>
          </NavLink>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;