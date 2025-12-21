import { useState } from 'react'
import './App.css'
import SearchDebounce from './components/SearchDebounce'
import MouseThrottle from './components/MouseThrottle'
import ResizeThrottle from './components/ResizeThrottle'
import Instructions from './components/Instructions'

function App() {
  return (
    <div className="app">
      <h1 className="main-title">🚀 Debouncing & Throttling Practice</h1>
      
      <div className="container">
        <SearchDebounce />
        <MouseThrottle />
        <ResizeThrottle />
        <Instructions />
      </div>
    </div>
  )
}

export default App
