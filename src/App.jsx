import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
// import { onLoad } from './components/Animation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="main" className='h-auto relative'>

      <Header/>
      <div className='h-[100vh] bg-green-400'></div>
      <div className='h-[100vh] bg-blue-400'></div>
      <div className='h-[100vh] bg-violet-400'></div>
      <div id='page-3' className='h-[100vh] bg-purple-400'></div>
      <Footer />
    </div>

    </>
  )
}

export default App
