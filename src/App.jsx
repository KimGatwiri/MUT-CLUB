import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import FooterSection from './components/Footer/footer'
import Home from './pages/Home/Home'
import Leadership from './pages/Leadership/Leadership'
import Tracks from './pages/Tracks/Tracks'
import Events from './pages/Events/Events'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/Leadership' element ={<Leadership />} />
      <Route path='/Tracks' element ={<Tracks />} />
      <Route path='/Events' element ={<Events />} />
    </Routes>
    </BrowserRouter>
    <FooterSection />
     
     
     
     
     

</>





  )
}

export default App;
