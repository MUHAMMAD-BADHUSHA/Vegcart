import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import AppProvider from './Context/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider/>
     <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
  </StrictMode>,
)
