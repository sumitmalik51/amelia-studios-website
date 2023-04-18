// // projectcarousel & projectinfo 

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const ProjectContainer = () => {

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
//     <>
//       <div className='general-project-container'>
//         {projects.map(project => {
//           const { id, contentUrl, contentDescription, clientName, projectTitle, projectType, description } = project
//           console.log(project)
//           return (
//             <div className='swiper-wrapper' key={id}>
//               <div className='hello'>
//                 <img src={contentUrl} alt={`${contentDescription}`} />
//                 <h4>{clientName}</h4>
//                 <h5>{projectTitle}</h5>
//                 <p>{projectType} - {description}</p>
//               </div>
//             </div>
//           )

//         })}
//       </div>
//     </>
//   )
// }
// export default ProjectContainer