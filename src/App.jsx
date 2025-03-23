
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import UserDashboard from './pages/UserDashboard'
import Header from './components/Header'
import CompDashboard from './pages/CompDashboard'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
        <Route path='/compDashboard' element={<CompDashboard/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
