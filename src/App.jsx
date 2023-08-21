import './App.css'
import './css/MediaQueries.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Weather from './components/Weather'
import Plants from './components/Plants'
import Footer from './components/Footer'
import Comunity from './components/Comunity'
import UserPage from './components/UserPage'

function App() {
  let helloWorld = 'Hello, World'
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/user_page' element={<UserPage />}/>
        <Route path='/plants' element={<Plants />} />
        <Route path='/comunity' element={<Comunity />} />
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
