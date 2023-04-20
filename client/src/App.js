import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components
import Homepage from '../src/pages/Homepage'
import Contact from './pages/Contact'
import Loading from '../src/components/Loading'
// import Header from '../src/components/Header'


const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  }, [])

  return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/loading' element={<Loading />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
