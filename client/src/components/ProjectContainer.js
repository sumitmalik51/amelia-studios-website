import { useState } from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from 'swiper'

import ProjectTextPopUp from './ProjectTextPopUp'
import SwiperContainer from './SwiperContainer'


SwiperCore.use([Navigation])


const ProjectContainer = ({ project }) => {
  const { id, assets, client_name, project_title, project_type, description } = project

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='project-container' key={id}>
      <div className='swiper-wrapper'>
        <Swiper navigation>
          <SwiperContainer assets={assets} />
        </Swiper>
      </div>
      <button className="project__title" onClick={toggleOpen}>
        {client_name}
      </button>
      <ProjectTextPopUp isOpen={isOpen} toggleOpen={toggleOpen} clientName={client_name} projectTitle={project_title} description={description} projectType={project_type} />
    </div>
  )
}

export default ProjectContainer
