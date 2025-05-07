import React, { useContext, useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Footer from './Components/Footer'
import Admindash from './Components/AdminComponents/Admindash'
import AddProducts from './Components/AdminComponents/AddProducts'
import SignIn from './SignIn'
import SignUp from './SignUp'
import UserHome from './Components/UserComponents/UserHome'
import EditItem from './Components/AdminComponents/EditItem'
import UserCrat from './Components/UserComponents/UserCrat'
import { AppContext } from './Context/AppContext'

function App() {
  
  const {isAdmin,setIsAdmin,isLogged,setIsLogged}=useContext(AppContext)
  
  return (
   <>
   <Router>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<><LandingPage/><Footer/></>}/>
      
      {/*user Routes */}
      <Route path='/home' element={<><UserHome/><Footer/></>}/>
      <Route path='/user' element={isLogged ?<>{isAdmin?<Admindash/>:<UserHome/>}</> :<SignIn/>}/>
      <Route path='/cart' element={<><UserCrat/><Footer/></>}/>

      {/*Admin Routes */}

      <Route path='/admin' element={<Admindash/>}/>
      <Route path='/dashbord' element={<Admindash/>}/>
      <Route path='/addProduct' element={<AddProducts/>}/> 
      <Route path='/editItem/:id' element={<EditItem/>}/> 



    </Routes>
   </Router>
   
   </>
  )
}

export default App
