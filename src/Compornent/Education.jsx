import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <section className='education'>
       <h2 className='heading'>Education</h2>
       <div className='timeline-items'>

        <div className='timeline-item'>
            <div className='timeline-dot'></div>
                <div className='timeline-date'>2021</div>
                <div className='timeline-content'>
                    <h3>High School</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi deleniti maiores optio deserunt vitae amet dolorem sequi dolor eius cum, reiciendis dolores repellat omnis ullam natus ut laboriosam fugiat quidem.</p>
                </div>
        </div>


        <div className='timeline-item'>
            <div className='timeline-dot'></div>
                <div className='timeline-date'>2021</div>
                <div className='timeline-content'>
                    <h3>Internship</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi deleniti maiores optio deserunt vitae amet dolorem sequi dolor eius cum, reiciendis dolores repellat omnis ullam natus ut laboriosam fugiat quidem.</p>
                </div>
            
        </div>



        <div className='timeline-item'>
            <div className='timeline-dot'></div>
                <div className='timeline-date'>2021</div>
                <div className='timeline-content'>
                    <h3>University</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi deleniti maiores optio deserunt vitae amet dolorem sequi dolor eius cum, reiciendis dolores repellat omnis ullam natus ut laboriosam fugiat quidem.</p>
                </div>
            
        </div>
       </div>
    </section>
  )
}

export default Education