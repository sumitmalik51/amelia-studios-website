import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Keyboard, Navigation } from "swiper";

SwiperCore.use([Keyboard, Navigation]);

const Homepage = () => {

  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  // const [selectedProject, setSelectedProject] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }


  // const handleProjectTitleClick = (project) => {
  //   setSelectedProject(project);
  // }

  // const handleBannerClick = () => {
  //   setSelectedProject(null);
  // }

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

                  {/*-- Slider & project info main container --*/ },
                  <div className='project-container' key={id}>
                    {/*-- React Swiper Component with integrated features --*/}
                    <div className='swiper-wrapper'>
                      <Swiper
                        // className="swiper-wrapper"
                        key={id}
                        navigation={true}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        keyboard={{
                          enabled: true
                        }}
                        // navigation={{
                        //   nextEl: ".swiper-button-next",
                        //   prevEl: ".swiper-button-prev"
                        // }}
                        modules={[Keyboard, Navigation]}
                      >
                        {/*-- React SwiperSlide Component which shows project images --*/}
                        {assets.map(asset => (
                          <SwiperSlide key={asset.url}>
                            <div>
                              <img src={asset.url} alt={asset.description} />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    {/* Display client_name in bottom left corner & load project info banner on click */}

                    <button className="project__title" onClick={toggleOpen}>
                      {client_name}
                    </button>

                    <div className={isOpen ? 'open project__info-container' : 'project__info-container'}>
                      
                      <button className="project__close" onClick={toggleOpen}>
                      </button>
                      <h2>{client_name}</h2>
                      <h3>{project_title}</h3>
                      <p>{project_type}</p>
                      <p>{description}</p>
                    </div>



                    {/* <div>
                      <span
                        className="client_name"
                        onClick={() => handleProjectTitleClick(project)}
                      >

                      </span>
                      {selectedProject && selectedProject.id === id &&
                        <div className="banner">
                          {/* Display banner with project details */}
                    {/* <h4>{client_name}</h4>
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
                    </div> */}
                  </div>
                )
              })}
            </div>
        }
      </div>
    </>
  )
}

export default Homepage;
