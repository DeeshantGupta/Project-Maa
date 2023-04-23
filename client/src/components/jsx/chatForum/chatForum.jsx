import React , {useState , useEffect} from 'react';
import {useParams , useNavigate} from "react-router-dom" ;
import io from  "socket.io-client";
import axios from "axios" ;
import {useCookies} from 'react-cookie'
const socket = io.connect("http://localhost:5000") ;

const ChatForum = () => {

  const navigate = useNavigate() ;

  const [message , setMessage] = useState("") ;

  const [cookies,setCookie,removeCookie] = useCookies([]);

  const [messageReceived , setMessageReceived] = useState([]) ;

  const [error , setError] = useState("") ;

  const [userInfo,setUserInfo] = useState({});

  const {id} = useParams();

  const sendMessage = () =>{
    if(message.length == 0){
      setError("Please type the message.") ;
    }
    else{
      socket.emit("send_message",{ message }) ;
    }
  }

  const getUser = async()=>{
    axios.get(`http://localhost:5000/user/getuser/${id}`).then(({data})=>{
      setUserInfo(data);
    })
  }

  useEffect(() =>{

    const verifyUser = ()=>{
      if(!cookies.jwt){
        navigate('/login');
      }else{
        axios.post(`http://localhost:5000/user/checkuser`,{},{
          withCredentials:true,
        }).then(({data})=>{
          if(data.id != id){
            removeCookie("jwt");
            navigate('/login');
          }else{
            if(data.flag){
              navigate(`/${data.id}/checkforum`);
              getUser();
            } 
          }
        })
      }
    }
  
    verifyUser() ;

    socket.on("receive_message",(data) =>{
      setMessageReceived(data) ;
    })
  },[socket])

  return (
    <div>
        <input placeholder="Message.." onChange={(e) => setMessage(e.target.value)}></input>
        <p>{error}</p>
        <button onClick={sendMessage}>Send Message</button>
        <h1> Message :{
          messageReceived.map((chat,index)=>(
            <div key={index}>
              <h1>{chat.message}</h1>
            </div>
          ))
        } </h1>
  </div>
  )
}

export default ChatForum