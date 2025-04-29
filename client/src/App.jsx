import React, { useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Footer from './Components/Footer'
import Admindash from './Components/AdminComponents/Admindash'
import AddProducts from './Components/AdminComponents/AddProducts'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import UserHome from './Components/UserComponents/UserHome'
function App() {
  
  const [isAdmin,setIsAdmin]=useState(false)
  const [isLogged,setIsLogged]=useState(true)
  return (
   <>
   <Router>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<><LandingPage/><Footer/></>}/>
      
      {/*user Routes */}
      <Route path='/home' element={<><LandingPage/><Footer/></>}/>
      <Route path='/shop' element={isLogged ?<>{isAdmin?<Admindash/>:<UserHome/>}</> :<SignIn/>}/>
      {/*Admin Routes */}

      <Route path='/admin' element={<Admindash/>}/>
      <Route path='/dashbord' element={<Admindash/>}/>
      <Route path='/addProduct' element={<AddProducts/>}/>  

    </Routes>
   </Router>
   
   </>
  )
}

export default App
