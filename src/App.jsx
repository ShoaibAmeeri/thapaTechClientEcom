import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Navbar from './components/navbar/Navbar'
import ErrorPage from './pages/Error/ErrorPage'
import Footer from './components/footer/Footer'
// import Logout from './pages/auth/logout'

function App() {
 

  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      {/* <Route path='/logout' element={<Logout/>} /> */}
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
