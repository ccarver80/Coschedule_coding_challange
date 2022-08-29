import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateAccount() {
    const nav = useNavigate()

    // Hooks
    const [formData, setFormData] = useState()


    useEffect(() => {
        
    })

    return(
       <div className="flex flex-col h-screen">
            {/* Login  */}
            <div className='flex flex-col mx-auto mt-10 rounded-lg border border-black'>
            <h1>Create New Account</h1>
                <form className='flex flex-col p-5 mx-auto '>
                    <label>Please Enter a valid Email</label>
                    <input className='border border-slate-500' type='email' />
                    <label>Please Pick A Username</label>
                    <input className='border border-slate-500' type='text' />
                    <label>Please Pick A Password</label>
                    <input className='border border-slate-500' type='password'/>
                    <label>Please Type Password Again</label>
                    <input className='border border-slate-500' type='password'/>
                    
                   
                    <button type='submit'>Create Account</button>
                </form>
                <button onClick={() => nav('/')} className="mx-auto">Login With Existing Account</button>
            </div>

       </div>
    )
}