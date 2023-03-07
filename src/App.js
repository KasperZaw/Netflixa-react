import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./Pages/Account";
import Home from './Pages/Home.jsx'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Protected from './components/Protected'
function App() {
  return (
   <>
   <AuthContextProvider>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/account' element={<Protected><Account /></Protected>}/>
     
     </Routes>

   </AuthContextProvider>
   </>
  );
}

export default App;
