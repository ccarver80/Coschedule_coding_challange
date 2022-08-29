import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Signin from './Components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />


        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
