import { useState, useEffect } from 'react'
import axios from 'axios'

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
        {loading ?
          <span>Loading...</span>
          :
          errors ?
            <span>Collaborations could not load. Please try again later!</span>
            :
            <div className='project-wrapper'>
              {projects.map(project => {
                const { id, content_url, content_description, client_name, project_title, project_type, description } = project
                console.log(project)
                return (
                  <div className='project-container' key={id}>
                    <div className='swiper-wrapper'>
                      <img src={content_url} alt={`${content_description}`} />
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

// import { useState, useEffect } from 'react'
// import axios from 'axios'



// const Homepage = () => {

//   const [projects, setProjects] = useState([])
//   const [errors, setErrors] = useState(false)
//   const [loading, setLoading] = useState(true)

//   // accessing Express API to get all collaborations
//   useEffect(() => {
//     const getProjects = async () => {
//       try {
//         const { data } = await axios.get('/api/projects/')
//         setProjects(data)
//       } catch (err) {
//         console.log(err)
//         setErrors(true)
//       }
//       setLoading(false)
//     }
//     getProjects()
//   }, [])


//   return (
//     <div className='project-wrapper'>
// {
//   loading ?
//     <span>Loading...</span>
//     :
//     errors ?
//       <span>Collaborations could not load. Please try again later!</span>
//       :
//           <div className='project-container'>
//             {projects.map(project => {
//               const { id, url, description } = project
//               console.log(project)
//               return (
//                 <div className='viewport' key={id}>
//                   <img src={url} alt={description} className='img-thumbnail' />
//                 </div>
//               )
//             })}
//           </div>
//       }
//     </div>
//   )
// }


// export default Homepage