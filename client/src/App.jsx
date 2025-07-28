import React from 'react'
import  {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import RegisterForm from './components/RegisterForm'
import Profile from './pages/Profile'
import Users from './pages/Users'
import NotFound from './pages/NotFound'
import EditForm from './components/EditForm'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/register' element={<RegisterForm />} />
   <Route path='/profile' element={<Profile/>} />
   <Route path='/users' element={<Users/>} />
   <Route path='/editform' element={<EditForm/>} />
   <Route path='*' element={<NotFound/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App