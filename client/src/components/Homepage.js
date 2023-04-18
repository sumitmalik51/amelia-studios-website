// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SwiperCore, { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Keyboard, Pagination } from "swiper";

// SwiperCore.use([Navigation]);

// // import SwiperCarousel from './projects/SwiperCarousel'

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
//     <>
//       <div className='homepage'>
//         <div className='project-wrapper-1'>
//           {loading ?
//             <span>Loading...</span>
//             :
//             errors ?
//               <span>Projects could not load. Please try again later.</span>
//               :
//               <div className='project-wrapper'>
//                 {projects.map(project => {
// {/* const { id, client_name, project_title, project_type, description } = project */ }
//                   const { id, assets } = project;
//                   console.log(project);
//                   return (
//                     <div className='project-container' key={id}>
//                       <Swiper
//                         key={id}
//                         slidesPerView={1}
//                         spaceBetween={30}
//                         keyboard={{
//                           enabled: true
//                         }}
//                         pagination={{
//                           clickable: true
//                         }}
//                         navigation={{
//                           nextEl: ".swiper-button-next",
//                           prevEl: ".swiper-button-prev"
//                         }}
//                         modules={[Keyboard, Pagination, Navigation]}
//                         className="mySwiper"
//                       >
//                         {assets.map(asset => (
//                           <SwiperSlide key={asset.url}>
//                             <div>
//                               <img src={asset.url} alt={asset.description} />
//                             </div>
//                           </SwiperSlide>
//                         ))}



//                       </Swiper>
//                       {/* <div className='project-info'>
//                         <h4>{client_name}</h4>
//                         <h5>{project_title}</h5>
//                         <p>{project_type} - {description}</p>
//                       </div> */}
//                     </div>
//                   )
//                 })}
//               </div>
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// export default Homepage
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination } from "swiper";

SwiperCore.use([Navigation]);

const Homepage = () => {

  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectTitleClick = (project) => {
    setSelectedProject(project);
  }

  const handleBannerClick = () => {
    setSelectedProject(null);
  }

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
        <div className='project-wrapper'>
          {loading ?
            <span>Loading...</span>
            :
            errors ?
              <span>Projects could not load. Please try again later.</span>
              :
              <div>
                {projects.map(project => {
                  const { id, assets, client_name, project_title, project_type, description } = project;
                  console.log(project);
                  return (
                    <div className='project-container' key={id}>
                      <Swiper
                        key={id}
                        slidesPerView={1}
                        spaceBetween={30}
                        keyboard={{
                          enabled: true
                        }}
                        pagination={{
                          clickable: true
                        }}
                        navigation={{
                          nextEl: ".swiper-button-next",
                          prevEl: ".swiper-button-prev"
                        }}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                      >
                        {assets.map(asset => (
                          <SwiperSlide key={asset.url}>
                            <div>
                              <img src={asset.url} alt={asset.description} />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div>
                        {/* Display project title at the bottom left */}
                        <h4
                          className="project-title"
                          onClick={() => handleProjectTitleClick(project)}
                        >
                          {project_title}
                        </h4>
                        {selectedProject && selectedProject.id === id &&
                          <div className="banner">
                            {/* Display banner with project details */}
                            <h4>{client_name}</h4>
                            <h5>{project_title}</h5>
                            <p>{project_type} - {description}</p>
                            <div
                              className="banner-close"
                              onClick={handleBannerClick}
                            >
                              Close
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  )
                })}
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Homepage;
