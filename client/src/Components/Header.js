

export default function Header(props) {

  
    return (
       <div className="p-2 bg-purple-400 m-2 h-20 rounded-xl shadow-lg shadow-black flex ">
        <h1 className="mx-auto my-auto text-4xl">My Giphy Application</h1>
        {props.userInfo.id ? ( 
            
            <div className="flex flex-col mr-5">
            <h1 className="text-xl">Hello, {props.userInfo.username}</h1>
            <button className="w-fit p-2 mx-auto rounded-xl bg-red-400" onClick={() => {props.auth(false); props.resetInfo({})}}>Log out</button>
            </div>
        ) : ''}
        
       </div>
    )
}