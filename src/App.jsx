
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import UserDashboard from './pages/UserDashboard'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/register2' element={<Auth insideCompany={true} />}/>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
