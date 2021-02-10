import React,{useState,useEffect} from "react"
import './App.css';
import firebase from "firebase"
import database from "./firebase"

function App() {
  const [input,setInput]=useState("")
  const [error,setError]=useState("")
  const [username,setUser]=useState("Guest")


  const [list,setList]=useState([])
  const storeMessage=(event)=>{
    setInput(event.target.value)
  }
  useEffect(()=>{
    const name=window.prompt("enter your name");
    setUser(name);
  },[])

  useEffect(() => {
    database
    .collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot((snapshot)=>{
      setList(snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        }))
      );
    })
  }, [])
  const sendMessage=(event)=>{
    event.preventDefault();
    if(input===""){
      setError("write something first")
    }else{
      const chatMessage={
        name:username,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
      database.collection('messages').add(chatMessage);
      // setList([...list,input])
      setInput("")
      setError("")
    }
  }
  return (
    <div className="App">
     <h1 className="heading">Real Time Chat App</h1>
     <h3 className="error">{error}</h3>
     <div className="ourmessage">
       
      {
        list.map(({id,data:{message,timestamp,name}})=>(<h3 key={id} className="chat"><span className="username">{name} : </span>{message}</h3>))
      }
     </div>
     <form>
     <input value={input} onChange={storeMessage} placeholder="write message"/>
     <button type="submit" onClick={sendMessage}>Send Mesaage</button>
     </form>
    </div>
  );
}

export default App;
