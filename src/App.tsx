import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './componets/home'
import { Nav } from './componets/Nav'
import { Treact } from './componets/Treact'
import { Vite } from './componets/Vite'
function App() {

  return (
    <div className="text-center">
      <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='react' element={<Treact />} />
          <Route path='vite' element={<Vite />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
