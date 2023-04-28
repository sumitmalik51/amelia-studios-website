import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from "swiper";

import Header from '../components/Header'
import Loading from '../components/Loading'


SwiperCore.use([Navigation]);

const Homepage = () => {

  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  // const [selectedProject, setSelectedProject] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

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
    <>
    <Header />
      <div className='project-wrapper'>
        {loading ?
          <Loading />
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
                        navigation={{ // Specify the navigation prop with options
                          nextEl: '.swiper-button-next', // CSS class for the "Next" arrow
                          prevEl: '.swiper-button-prev', // CSS class for the "Previous" arrow
                        }}
                        slidesPerView={1}
                        spaceBetween={ 0}
                        effect={"fade"}
                        loop={ true}
                        speed={900}
                        // keyboard={{
                        //   enabled: true
                        // }}
                        modules={ [Navigation]}
                        >
                        {/*-- React SwiperSlide Component which shows project images --*/ }
                        {assets.map(asset => (
                          <SwiperSlide key={asset.url}>
                            <div>
                              <img src={asset.url} alt={asset.description} />
                            </div>
                          </SwiperSlide>
                        ))}

                      <div className="swiper-buttons">
                        <button className="swiper-button-prev">
                          Previous
                        </button>
                        <button className="swiper-button-next">
                          Next
                        </button>
                      </div>

                    </Swiper>
                  </div>
                    {/* Display client_name in bottom left corner & load project info banner on click */ }

                    <button className="project__title" onClick={toggleOpen}>
                      {client_name}
                    </button>

                    <div className={isOpen ? 'open project__info-container' : 'project__info-container'}>

                      <button className="project__close" onClick={toggleOpen}>
                      </button>
                      <h4>
                      <span style={{fontWeight: 'bold'}}>
                      CLIENT:&nbsp;&nbsp;&nbsp;
                      </span> 
                      {client_name}
                      </h4>
                      <h5>
                      <span style={{fontWeight: 'bold'}}>
                      PROJECT:&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      {project_title}
                      </h5>
                      <p> 
                      <span style={{fontWeight: 'bold'}}>
                      INFO:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      {description}
                      </p>
                      <p> 
                      <span style={{fontWeight: 'bold'}}>
                      ROLE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      {project_type}
                      </p>
                    </div>
                  </div>
                )
              })}
      </div>
        }
    </div >
    </>
  )
}

export default Homepage;
