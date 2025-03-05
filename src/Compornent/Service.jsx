import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <section className='services' id='services'>
        <h2 className='heading'>Services</h2>

        <div className='services-container'>
            <div className='service-box'>
                <div className='service-info'>
                    <h4>UI Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius facere nisi ullam aliquid, repudiandae ea dolorum. Debitis modi porro libero cum fugiat harum aliquid, molestias officiis ratione magni quam.</p>
                </div>
            </div>


            <div className='service-box'>
                <div className='service-info'>
                    <h4 className='Frontend'>Frontend Development</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius facere nisi ullam aliquid, repudiandae ea dolorum. Debitis modi porro libero cum fugiat harum aliquid, molestias officiis ratione magni quam.</p>
                </div>
            </div>


            <div className='service-box'>
                <div className='service-info'>
                    <h4>Backend Development</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius facere nisi ullam aliquid, repudiandae ea dolorum. Debitis modi porro libero cum fugiat harum aliquid, molestias officiis ratione magni quam.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='service-info'>
                    <h4>Testing</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque eius facere nisi ullam aliquid, repudiandae ea dolorum. Debitis modi porro libero cum fugiat harum aliquid, molestias officiis ratione magni quam.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service