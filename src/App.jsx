import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Features from './components/Features'
import GrammarBox from './components/GrammerBox'
import Gemini from './components/Gemini'
import WordCard from './components/WordCard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/features' element={<Features/>}/>
        <Route path='/grammer' element={<GrammarBox/>} />
        <Route path='/wordcard' element={<WordCard/>} />
      </Routes>
      </BrowserRouter>

      {/* <Gemini/> */}
      
    </div>
  )
}

export default App