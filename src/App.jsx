import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Navbar from './components/Navbar.jsx'
import ImageSlider from './components/imageSlider'
import Weather from './components/Weather'

function App() {
  let helloWorld = 'Hello, World'
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App


function HomePage() {
  return(
  <>
  <div className="BODY flex flex-col gap-10 relative mr-auto ml-auto mt-16 w-[90%]">
  <Navbar />
  <ImageSlider />
  <Weather />

  </div>

  </>
  )
}
