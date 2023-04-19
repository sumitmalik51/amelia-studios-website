import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components
// import Navbar from './components/navigation/Navbar'
// import Homepage from './components/Homepage'
import LoadingPage from './components/pages/LoadingPage'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <main>
      <LoadingPage />
      {/* <Homepage /> */}
    </main>
  )
}

export default App
