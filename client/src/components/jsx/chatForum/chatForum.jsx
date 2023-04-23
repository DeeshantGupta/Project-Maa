import { useEffect,useState } from "react";
import io from  "socket.io-client";
const socket = io.connect("http://localhost:5000") ;

const chatForum = () => {

    const [message , setMessage] = useState("") ;

    const [messageReceived , setMessageReceived] = useState("") ;
  
    const sendMessage = () =>{
      socket.emit("send_message",{
          message
      })
    }

    useEffect(() =>{
        socket.on("receive_message",(data) =>{
          setMessageReceived(data.message) ;
        })
      },[socket])

  return (
    <div>
      <input placeholder="Message.." onChange={(e) => setMessage(e.target.value)}></input>
      <button onClick={sendMessage}>Send Message</button>
    <h1> Message :{messageReceived} </h1>
    </div>
  )
}

export default chatForum