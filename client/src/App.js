import { useEffect } from 'react'
import axios from 'axios'

// Import components
import Navbar from './components/navigation/Navbar'
import Homepage from './components/Homepage'

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
      <Navbar />
      <Homepage />
    </main>
  )
}

export default App
