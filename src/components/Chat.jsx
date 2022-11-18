import React, {useContext, useState, useEffect, useRef} from "react";
import styles from '../styles/chat.module.scss'
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {Context} from "../index";
import {Container, Grid, TextField, Button} from '@mui/material';
import Loader from './Loader'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {Message} from "./Message";

export default function Chat() {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)
  const scrollRef = useRef()

  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )

  useEffect(() => {
    if(messages) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [messages])

  function changeformSubmit () {
    if(value !== '') {
      setVisible(true)
    } else  setVisible(false)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('')
    setVisible(false)
  }

  if(loading) {
    return <Loader />
  }

  return (
    <Container className={styles.chat}>
      <Grid container className={styles.chatContainer}>
        <div className={styles.chatWrapper}>
          {
          messages.map(message => 
            <Message message={message} user={user}/>
          )}
          <div ref={scrollRef}></div>
        </div>
        <form onSubmit={sendMessage}>
          <TextField  
            placeholder="Введите сообщение"
            variant="outlined" 
            fullWidth
            maxRows={2}
            value={value}
            onKeyDown={changeformSubmit}
            onChange={(e) => 
              setValue(e.target.value)
            }
          />
          <Button id='formSubmit' style={{display: visible ? 'block' : 'none'}} variant="contained" className={styles.formSubmit} onClick={sendMessage}>Отправить</Button>
        </form>
      </Grid>
    </Container>
  );
}

