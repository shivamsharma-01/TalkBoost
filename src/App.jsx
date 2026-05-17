import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import GrammarBox from './pages/GrammerBox'
import Gemini from './components/Gemini'
import WordCard from './pages/WordCard'
import Challenge from './components/Challenge'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/grammer' element={<GrammarBox/>} />
        <Route path='/wordcard' element={<WordCard/>} />
        <Route path='/chat' element={<Gemini/>} />
        <Route path='/challenge' element={<Challenge/>}/>
      </Routes>
      </BrowserRouter> 
      

     
      
      
    </div>
  )
}

export default App