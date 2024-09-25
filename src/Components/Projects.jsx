

import  {ProjectWork}  from "../ProjectsWork"

const Projects = () => {

  return (
    <div className='mt-20'>
      <h1 className='text-5xl text-center'>Projects</h1>
      <div>
        {ProjectWork.map((project,index) => (
          <div key={index} className="flex justify-center  flex-wrap item-center gap-8 mt-20"> 
          <div  className="mb-8">
           <a href={project.site}>
           <img src={project.image} alt={project.title} className="rounded-md bg-transparent"/>
           </a>
          </div>
          <div className="mt-10 flex justify-center flex-col items-center">
          <h5 className="text-5xl mb-4">{project.title}</h5>
          <p className="max-w-sm text-2xl">{project.description}</p>
          <div className="flex gap-3">  
          <a href={project.site}>
          <p className="py-1 px-2 m-3 bg-black text-white rounded-sm">View Site</p>
          </a>
          <a href={project.sourceCode}>
          <p className="py-1 px-2 m-3 bg-black text-white rounded-sm">View Source Code</p>
          </a>
          </div>
          <div className="flex"> 
          {project.technologies.map((tech,index) => (
            <div key={index} className="flex flex-wrap justify-center">
            <span className="py-1 px-2 m-3 bg-blue-500 text-white rounded-sm ">{tech}</span>
            </div>
          ))}
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
