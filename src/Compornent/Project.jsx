import React from 'react'
import './Project.css'

// import image from asserts
import project1 from '../assets/Project-1.png'
import project2 from '../assets/Project-2.png'
import project3 from '../assets/Project-3.png'
import project4 from '../assets/Project-4.png'
const Project = () => {
  return (
    <div className='project'>
        <h1 className=''><b>Project</b></h1>
        <div className='project-flex'>
            <div className='project-card'>
                <div>
                    <img src={project1} alt="project1" className='project-img'/>
                </div>
                <h5>Makaan webpage built with react.js</h5>
                <p>Find A Perfect Home To Live With Your Family</p>
                <button className='project-btn' id='mmm'> <a href="https://adedamolaobadimu.netlify.app/" className='view'>View Project</a></button>
            </div>
            <div  className='project-card'>
                <div>
                    <img src={project2} alt="project2" className='project-img'/>
                </div>
                <h5>Personal project webpage built with react.js</h5>
                <p>Transforming Lives Through Excellence in Healthcare</p>
                <button className='project-btn'> <a href="https://obadimuadedamola.netlify.app/" className='view'>View Project</a></button>
            </div>
            <div  className='project-card'>
                <div>
                    <img src={project3} alt="project2" className='project-img'/>
                </div>
                <h5>Personal project webpage built with react.js</h5>
                <p>Launch Into Digital
                Excellence</p>
                <button className='project-btn' id='mmm'> <a href="https://obadimuadedamola.netlify.app/" className='view'>View Project</a></button>
            </div>
        </div>
        {/* <div className='project-flex'>
            <div className='project-card'>
                <div>
                    <img src={project3} alt="project1" className='project-img'/>
                </div>
                <h5>Cworld webpage built with react.js</h5>
                <button className='project-btn'> <a href="https://cworld.onrender.com" className='view'>View Project</a></button>
            </div>
            <div  className='project-card'>
                <div>
                    <img src={project4} alt="project" className='project-img'/>
                </div>
                <h5>Vecci project webpage built with react.js</h5>
                <button className='project-btn'> <a href="https://vecci.onrender.com" className='view'>View Project</a></button>
            </div>
        </div> */}
    </div>
  )
}

export default Project