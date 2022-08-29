import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      {/* Added private route so user HAS to be logged in */}
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path='/create_account' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
