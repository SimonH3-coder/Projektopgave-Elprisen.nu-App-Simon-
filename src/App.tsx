import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getElpris} from './api/getElpris'
import { getPrisel } from './api/getPrisel'
import { Navbar } from './components/Navbar'
import { Homepage } from './pages/Homepage'
import './App.css'

function App() {
  const [elprisData, setElprisData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const elpris = await getElpris()
        const prisel = await getPrisel()
        console.log(elpris, prisel);
        setElprisData({ elpris, prisel })

      }catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  console.log(elprisData);
  
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Router>
    
  )
}

export default App
