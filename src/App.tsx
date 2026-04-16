import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getElpris} from './api/getElpris'
import { ElType } from './types'
import { Navbar } from './components/Navbar'
import './App.css'

function App() {
  const [elprisData, setElprisData] = useState<ElType[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const elpris = await getElpris()
        console.log(elpris);
        setElprisData(elpris)

      }catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Router>
    
  )
}

export default App
