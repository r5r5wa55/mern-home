
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Header from './component/Header'
import Profile from './page/Profile'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/sign-in' element={<SignIn />}/>
          <Route path='/sign-up' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
