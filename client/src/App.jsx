import React, { useContext} from 'react'
import {BrowserRouter as Router , Routes , Route, Navigate} from 'react-router-dom'
import LandingPage from './LandingPage'
import Footer from './Components/Footer'
import Admindash from './Components/AdminComponents/Admindash'
import AddProducts from './Components/AdminComponents/AddProducts'
import SignIn from './SignIn'
import SignUp from './SignUp'
import UserHome from './Components/UserComponents/UserHome'
import EditItem from './Components/AdminComponents/EditItem'
import { AppContext } from './Context/AppContext'
import UserCart from './Components/UserComponents/UserCart'
import UserList from './Components/AdminComponents/UserList'
import AdminNav from './Components/AdminComponents/AdminNav'

function App() {
  
  const {isAdmin,isLogged,}=useContext(AppContext)
  
  return (
   <>
   <Router>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<><LandingPage/><Footer/></>}/>
      
      {/*user Routes */}
      <Route path='/home' element={<><UserHome/></>}/>
      <Route path='/user' element={isLogged ?<>{isAdmin?<Navigate to={'/admin'}/>:<UserHome/>}</> :<SignIn/>}/>
      <Route path='/cart' element={<><UserCart/><Footer/></>}/>

      {/*Admin Routes */}

      <Route path='/admin' element={<Admindash/>}/>
      <Route path='/dashbord' element={<Admindash/>}/>
      <Route path='/addProduct' element={ <AddProducts/>}/> 
      <Route path='/editItem/:id' element={<EditItem/>}/> 
      <Route path='/userList' element={<><AdminNav/><UserList/></>}/>



    </Routes>
   </Router>
   
   </>
  )
}

export default App
