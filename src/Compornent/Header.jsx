import React from 'react'
import './Header.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";


import steady from '../assets/man.png'
const Header = () => {
  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <h1>Hello, I'm <span>Adedamola</span></h1>
        <h3 className='text-animation'> I'm a <span className='name'></span></h3>
        <p>a passionate Front-End Developer dedicated to crafting clean, responsive, and user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in turning creative ideas into functional and visually appealing websites
        </p>
        <div className='social-icon'>
          <a href="#"><CiLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"> <CiInstagram /></a>
        </div>
        <div className='btn-group'>
          <a href="#" className='btn'>Hire</a>
          <a href="#" className='btn'>Contact</a>
        </div>
      </div>
        <div className='home-img'>
          <img src={steady} alt=""/>
        </div>
      
    </section>
  )
}

export default Header