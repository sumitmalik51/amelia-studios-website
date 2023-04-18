import { useState, useEffect } from 'react'
import axios from 'axios'
import Swiper from 'swiper/react'



const Homepage = () => {

  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)


  // accessing Express API to get all collaborations
  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects/')
        setProjects(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
      setLoading(false)
    }
    getProjects()
  }, [])


  return (
    <>
      <div className='homepage'>
      <div className='project-wrapper-1'>
        <span>test</span>
        <img src='https://uc44904a465449f98a5c9490bc78.previews.dropboxusercontent.com/p/thumb/AB34EH0SVgllSEUzGYgJrVPqa1Luzw6h99gL_yydMs0IdBjuMg0WVPAOvSW4etC5sz3kqUzV87fDp2DoNNtqAmbPj805Cp8ysYgELcQxUJGJFmv19EpYtI-1ZW9LMyx_zZyToFgHlx4trLeMTx7uk38JwGafW1XlO8HASeOZv4wjutAcB3FiJDuUmlWfma3HxZKgsm2X1CkdksyLkFyhqCDoa_NNtkYL14kdoyLeTCK0uGFa7tsSm8cqgUT70cDD6WrGWvaUayBD666U3rbk-BMsAAIEcciAYbi5OhNiBUn2KIPSBzcu1iW3-KcHB8tIReu4LNrjl74_aHH1GCUvMROvM0iStPxrGNfaKMNHrjJy8fwNGEtolkXkiw4fdNzbn8UdJdZlZ40cCAKgW22Jyt7A0k27h6gjiCCwCRGSA-zQ56ux9cUORdGSe0KwBvnwWP1sAkp-nXWZlTJgdcs-E6Es/p.png' alt="Example" />
      </div>
        {loading ?
          <span>Loading...</span>
          :
          errors ?
            <span>Collaborations could not load. Please try again later!</span>
            :           
            <div className='project-wrapper'>
              {projects.map(project => {
                const { id, assets, client_name, project_title, project_type, description } = project
                console.log(project)
                return (
                  <div className='project-container' key={id}>
                    <div className='swiper-wrapper'>
                    {assets.map(asset => (
                        <div key={asset.url}>
                          <img src={asset.url} alt={asset.description} />
                        </div>
                      ))}
                    </div>
                    <div className='project-info'>
                      <h4>{client_name}</h4>
                      <h5>{project_title}</h5>
                      <p>{project_type} - {description}</p>
                    </div>
                  </div>
                )

              })}
            </div>
        }
      </div>
    </>
  )
}

export default Homepage

