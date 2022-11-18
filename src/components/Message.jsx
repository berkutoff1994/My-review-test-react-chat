import React from "react";
import styles from '../styles/chat.module.scss';
import {Grid, Avatar} from '@mui/material';

export function Message({message, user}) {
  return (
    <div className={styles.messageParams} key={message.createdAt} style={{
      border: user.uid === message.uid ? '2px solid green' : '2px solid red',
      marginLeft: user.uid === message.uid ? 'auto' : '0',
    }}>
      <Grid container>
        <Avatar src={message.photoURL} className={styles.avatar}/>
        <div className={styles.displayName} style={{color: user.uid === message.uid ? 'green' : 'red'}}>{user.uid === message.uid ? "Я" : message.displayName}</div>
      </Grid>
      <div>{message.text}</div>
    </div>
  );
}
