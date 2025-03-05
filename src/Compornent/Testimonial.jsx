import React from 'react'
import './Testimonial.css'
import { CiStar } from "react-icons/ci";
import man1 from '../assets/man1.png'
import man2 from '../assets/man2.png'
import man3 from '../assets/man3.png'
const Testimonial = () => {
  return (
    <section className='testimonial' id='testimonial'>
        <div className='testimonial-box'>
            <h2 className='heading'>Testimonial</h2>


            <div className='wrapper'>
                <div className='testimonial-item'>
                    <img src={man1} alt="" />
                    <h2>Adeyemo</h2>
                    <div className='rating'>
                      <CiStar id='star' />
                      <CiStar id='star' />
                      <CiStar id='star' />
                      <CiStar id='star' />
                      <CiStar id='star' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis nostrum ipsum doloremque magnam quidem voluptatum et aperiam aliquid, laudantium sed consectetur explicabo minus, praesentium voluptatem aspernatur eveniet consequatur officiis.</p>
                </div>



                <div className='testimonial-item'>
                    <img src={man2} alt="" />
                    <h2>Adedamola</h2>
                    <div className='rating'>
                      <CiStar id='star' />
                      <CiStar id='star' />
                      <CiStar id='star' />
                      <CiStar id='star' />
                      <CiStar id='star' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis nostrum ipsum doloremque magnam quidem voluptatum et aperiam aliquid, laudantium sed consectetur explicabo minus, praesentium voluptatem aspernatur eveniet consequatur officiis.</p>
                </div>




                <div className='testimonial-item'>
                    <img src={man3} alt="" />
                    <h2>Steady</h2>
                    <div className='rating'>
                    <CiStar id='star' />
                    <CiStar id='star' />
                    <CiStar id='star' />
                    <CiStar id='star' />
                    <CiStar id='star' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis nostrum ipsum doloremque magnam quidem voluptatum et aperiam aliquid, laudantium sed consectetur explicabo minus, praesentium voluptatem aspernatur eveniet consequatur officiis.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial