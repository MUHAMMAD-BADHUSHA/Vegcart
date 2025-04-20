import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Footer from './Components/Footer'
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
   </Router>
   <Footer/>
   </>
  )
}

export default App
