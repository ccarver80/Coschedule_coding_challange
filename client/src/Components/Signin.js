import { useNavigate } from "react-router-dom"

export default function Signin() {
  const nav = useNavigate()


    return (

      <div className="flex flex-col h-screen">
      <div className='flex flex-col mx-auto mt-10 rounded-lg border border-black'>
      <form className='flex flex-col p-5 mx-auto '>
          <label>Username</label>
          <input className='border border-slate-500' type='text' />
          <label>Password</label>
          <input className='border border-slate-500' type='password'/>
          <button type='submit'>Login</button>
      </form>
      <button onClick={() => nav('/create_account')} className="mx-auto">Create New Account</button>
  </div></div>
    )
}