import React, {useState} from "react";
import { useNavigate } from "react-router-dom"




export default function Signin(props) {
  const nav = useNavigate()


  // Hooks 
  const [signInData, setSignInData] = useState();
  const [errMessage, setErrMessage] = useState();

  const sendLogin = async (e) => {
    
    const encodedCreds = btoa(
      `${signInData.username}:${signInData.password}`
    );



    e.preventDefault()
    fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${encodedCreds}`,
      },
      
    })
    .then((res) => {
      return res.json()
  })
  .then((data) => {  
   console.log(data)
   if(data.username){  
       //    sets auth on app.js to true, and passes username up to app, which then passes down to the header, then nav to homepage
        props.auth(true); 
   props.userInfo(data); 
   nav('/')
   }else{
      setErrMessage(data.message)
   }
 
  
})
  }

    return (

      <div className="flex flex-col h-screen">
      <div className='flex flex-col mx-auto mt-10 rounded-lg border border-black'>
      <form onSubmit={sendLogin} className='flex flex-col p-5 mx-auto '>
          <label>Username</label>
            {/* Handle err messages from server */}
            {errMessage ? (<h1 className="text-2xl text-red-500">{errMessage}</h1>) : ""}
            
          <input className='border border-slate-500' onChange={(e) => setSignInData({...signInData, username: e.target.value})} type='text' />
          <label>Password</label>
          <input className='border border-slate-500' onChange={(e) => setSignInData({...signInData, password: e.target.value})} type='password'/>
          <button type='submit'>Login</button>
      </form>
      <button onClick={() => nav('/create_account')} className="mx-auto">Create New Account</button>
  </div></div>
    )
}