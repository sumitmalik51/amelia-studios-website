import { useState, useEffect } from 'react'
import axios from 'axios'

import LoadingPage from './LoadingPage'
import Header from '../components/Header'
import ProjectContainer from '../components/ProjectContainer'

// const ProjectContainer = React.lazy(() => import('../components/ProjectContainer'))


const Homepage = () => {

  // Set state: to access the projects selected to be on the homepage. The 'filter' method is used on the 'data' array to create a new array under 'filteredData', containing only the objects where the 'on_homepage' field value is '0'.
  const [currentProjects, setCurrentProjects] = useState([]) // This filtered array is then set as the value of 'currentProjects'.

  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/projects/')
        console.log(data)
        const filteredData = data.filter((project) => project.on_homepage === '0')
        setCurrentProjects(filteredData)
        console.log(filteredData)
      } catch (err) {
        setErrors(true)
      }
    };

    const timer = setTimeout(() => {
      fetchData()
      setLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <Header />
      {loading ?
        <LoadingPage />
        :
        errors ?
          <span>Sorry, we had trouble fetching the data! Please try again later.</span>
          :
          <div className='project__wrapper'>
            {currentProjects.map(project => (
              <ProjectContainer key={project.id} project={project} />
            ))}
          </div>
      }
    </main>
  )
}

export default Homepage


// const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true) // Set to be true when fetching data begins
  //       const { data } = await axios.get('/api/projects/')
  //       console.log(data)
  //       const filteredData = data.filter((project) => project.on_homepage === '0') // '0' being the value: 'yes, show on homepage' (whilst '1' is no)
  //       console.log(filteredData)
  //       setCurrentProjects(filteredData)
  //       setLoading(false) // Set to false when fetching data has been fetched
  //     } catch (err) {
  //       console.log(err)
  //       setErrors(true)
  //       // setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // })




