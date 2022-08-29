import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateAccount(props) {
    const nav = useNavigate()

    // Hooks
    const [formData, setFormData] = useState()

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
        if(res.ok) {
            return res.json()
        }
       })
       .then((data) => {props.auth(true); props.userInfo(data.username); nav('/')})
    }
    // useEffect(() => {
        
    // })

    return(
       <div className="flex flex-col h-screen">
            {/* Login  */}
            <div className='flex flex-col mx-auto mt-10 rounded-lg border border-black'>
            <h1>Create New Account</h1>
                <form onSubmit={submitForm} className='flex flex-col p-5 mx-auto '>
                    <label>Please Enter a valid Email</label>
                    <input className='border border-slate-500' onChange={(e) => setFormData({...formData, email: e.target.value })} type='email' />
                    <label>Please Pick A Username</label>
                    <input className='border border-slate-500' onChange={(e) => setFormData({...formData, username: e.target.value })} type='text' />
                    <label>Please Pick A Password</label>
                    <input className='border border-slate-500' onChange={(e) => setFormData({...formData, password: e.target.value })}type='password'/>
                    {/* <label>Please Type Password Again</label>
                    <input className='border border-slate-500' type='password'/> */}
                    
                   
                    <button type='submit'>Create Account</button>
                </form>
                <button onClick={() => nav('/')} className="mx-auto">Login With Existing Account</button>
            </div>

       </div>
    )
}