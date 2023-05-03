
const ProjectTextPopUp = ({ isOpen, toggleOpen, clientName, projectTitle, description, projectType }) => {

  return (
    <div className={isOpen ? 'open project__info-container' : 'project__info-container'}>
      <button className="project__close" onClick={toggleOpen}></button>
      <h4>{clientName}</h4>
      <h5>{projectTitle}</h5>
      <p>{description}</p>
      <p>{projectType}</p>
    </div>
  )
}

export default ProjectTextPopUp