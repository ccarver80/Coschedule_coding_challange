import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateAccount(props) {
    const nav = useNavigate()

    // Hooks
    const [formData, setFormData] = useState()
    const [errMessage, setErrMessage] = useState()

   const submitForm = async(e) => {
    console.log(formData)
    e.preventDefault()
       await fetch('http://localhost:5000/create_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
       }
       )
       .then((res) => {
           return res.json()
       })
       .then((data) => {  
        console.log(data)
        if(data.username){  
            //    sets auth on app.js to true, and passes username up to app, which then passes down to the header, then nav to homepage
             props.auth(true); 
        props.userInfo(data.username); 
        nav('/')
        }else{
           setErrMessage(data.message)
        }
      
       
    })
    }
    // useEffect(() => {
        
    // })

    return(
       <div className="flex flex-col h-screen">
            {/* Login  */}
            <div className='flex flex-col mx-auto mt-10 rounded-lg border border-black p-5'>
            <h1 className="mx-auto text-4xl font-bold">Create New Account</h1>
                <form onSubmit={submitForm} className='flex flex-col p-5 mx-auto '>
                    
                    <label className="text-2xl mx-auto">Please Pick A Username</label>
                    {/* Handle err messages from server */}
                    {errMessage ? (<h1 className="text-2xl text-red-500">{errMessage}</h1>) : ""}

                    <input className='border border-slate-500' onChange={(e) => setFormData({...formData, username: e.target.value })} type='text' />
                    <label className="text-2xl mx-auto mt-5">Please Pick A Password</label>
                    <input minLength={5} className='border border-slate-500' onChange={(e) => setFormData({...formData, password: e.target.value })}type='password'/>
          
                    
                   
                    <button className="bg-red-400 p-2 rounded w-fit mx-auto mt-2" type='submit'>Create Account</button>
                </form>
                <button onClick={() => nav('/')} className="mx-auto">Login With Existing Account</button>
            </div>

       </div>
    )
}