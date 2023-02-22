import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'



function App() {

   
  return (
    <div className="App">
        <Header/>

    
     <Routes>
     <Route path= "/home" element={<Home/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/signup" element={<Signup/>}/>
     </Routes>



     {/* <Button onClick={SignupUser}>Add User</Button> */}
    </div>
  )
}

export default App
