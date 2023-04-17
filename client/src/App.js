import { useEffect } from 'react'
import axios from 'axios'

// Import components
import Navbar from './components/navigation/Navbar'
import ProjectSection from './components/media/ProjectSection'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/projects/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <div>
      <Navbar />
      <ProjectSection />
    </div>
  )
}

export default App
