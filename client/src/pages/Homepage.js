import { useState, useEffect } from 'react'
import axios from 'axios'

import LoadingPage from './LoadingPage'
import Header from '../components/Header'
import ProjectContainer from '../components/ProjectContainer'

// const ProjectContainer = React.lazy(() => import('../components/ProjectContainer'))


const Homepage = () => {

  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects/')
        setProjects(data)
        // setLoading(false)
      } catch (err) {
        console.log(err)
        setErrors(true)
        // setLoading(false)
      }
      // setLoading(false)
    }
    getProjects()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  })

  return (
    <main>
      <Header />

      {loading ?
        <LoadingPage />
        :
        errors ?
          <span>Projects could not load. Please try again later.</span>
          :
          <div className='project__wrapper'>
            {projects.map(project => (
              <ProjectContainer key={project.id} project={project} />
            ))}
          </div>
      }
    </main>
  )
}

export default Homepage





