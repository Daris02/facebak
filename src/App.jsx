import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/accounts/Account";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/receptioniste' element={<Home />}>
          <Route path='/receptioniste/account' element={<Account />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
