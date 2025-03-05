import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h2 className='heading'>Contact <span>Me</span></h2>



        <form action="">
            <div className='input-group'>
                <div className='input-box'>
                    <input type="text" placeholder='Your Name *'/>
                    <input type="email" placeholder='Your Email *'/>
                </div>
                <div className='input-box'>
                    <input type="number" placeholder='Phone number'/>
                    <input type="text" placeholder='Subject' />
                </div>   
            </div>

            <div className='input-group-2'>
                <textarea  cols={30} placeholder='Your Message *'></textarea>
                <input type='submit' value={"Send Message"} className='btn'></input>
            </div>
        </form>
    </section>
  )
}

export default Contact