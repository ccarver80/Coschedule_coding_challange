

export default function Header(props) {

  
    return (
       <div className="p-2 bg-slate-200 h-20 w-screen flex ">
        <h1 className="mx-auto my-auto text-2xl">My Giphy Library</h1>
        {props.userInfo ? ( 
            <>
            <h1 className="">Hello, {props.userInfo}</h1>
            <button onClick={() => {props.auth(false); props.resetInfo()}}>Log out</button></>
        ) : ''}
        
       </div>
    )
}