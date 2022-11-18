import React from 'react';
import {Container, Grid} from '@mui/material';
import styles from '../styles/chat.module.scss'

const Loader = () => {
  return(
    <Container>
      <Grid container
        style={{height: window.innerHeight - 50}}
        alignItems={'center'}
        justifyContent={'center'}>
        <Grid 
          style={{width: 400, background: '#1976d2', borderRadius: 10}} 
          container 
          alignItems={'center'} 
          direction={'column'}>
          <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Loader;