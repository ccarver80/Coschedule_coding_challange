import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import PrivateRoute from "./PrivateRoute";

function App() {

  const [auth, setAuth] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    console.log(userInfo)
  })

  return (
    <>
    <Header auth={setAuth} resetInfo={setUserInfo} userInfo={userInfo}/>
    <BrowserRouter>
      <Routes>

      {/* Added private route so user HAS to be logged in */}
        <Route element={<PrivateRoute auth={auth}/>}>
          <Route exact path="/" element={<Home id={userInfo.id}/>} />
        </Route>

        <Route path="/signin" element={<Signin userInfo={setUserInfo} auth={setAuth}/>} />
        <Route path='/create_account' element={<CreateAccount userInfo={setUserInfo} auth={setAuth}/>} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
