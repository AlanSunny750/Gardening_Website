import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Header from './components/header'
import ImageSlider from './components/imageSlider'
import Weather from './components/Weather'
import Plants from './components/Plants'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  let helloWorld = 'Hello, World'
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/loading' element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/plants' element={<Plants />} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App


function HomePage() {
  return(
  <>
  <Navbar />
  <Header />
  
  <div className="BODY flex flex-col gap-10 relative mr-auto ml-auto mt-16 w-[90%]">
    <ImageSlider />
    <Weather />
  </div>

  <Footer />
  </>
  )
}
