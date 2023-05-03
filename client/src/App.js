import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components
import Homepage from '../src/pages/Homepage'


const App = () => {

  // Call on API. If you need to reorder/sort the object array, do it here first. 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects/') 
      console.log(data)
    }
    getData()
  }, [])

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
