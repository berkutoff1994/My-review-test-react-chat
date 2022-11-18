import React, {useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter'
import {useAuthState} from 'react-firebase-hooks/auth';
import './App.css'
import {Context} from "./index";
import Loader from "./components/Loader";

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if(loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;




// кому нужен firebase 9 
// import {
//   collection,
//   addDoc,
//   Timestamp,
//   getDocs,
//   doc,
//   query,
//   onSnapshot,
//   orderBy,
// } from "firebase/firestore";

// import { Context } from "../..";
// import { Container, Button, Grid, TextField, Avatar } from "@mui/material";


// const Chat = () => {
//   const { auth, db } = useContext(Context);
//   const [user] = useAuthState(auth);
//   const [value, setValue] = useState("");

//   const [messagesData, setMessagesData] = useState([]);

//   const sendMessage = async () => {
//     try {
//       const docRef = await addDoc(collection(db, "messages"), {
//         uid: user.uid,
//         displayName: user.displayName,
//         photoURL: user.photoURL,
//         text: value,
//         createdAt: Timestamp.fromDate(new Date()),
//       });

//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//     setValue("");
//   };

//   const getMessages = async () => {
//     const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

//     onSnapshot(q, (querySnapshot) => {
//       setMessagesData([]);

//       querySnapshot.docs.map((doc) => {
//         setMessagesData((prevState) => {
//           return [...prevState, doc.data()];
//         });
//       });
//     });
//   };

//   useEffect(() => {
//     getMessages();
//   }, []);
