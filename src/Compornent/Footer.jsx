import React from 'react'
import './Footer.css'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='social'>
          <a href="#"><CiLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"> <CiInstagram /></a>
        </div>

        <ul>
            <li>
                <a href="#">FAQ</a>
            </li>

            <li>
                <a href="#">Service</a>
            </li>

            <li>
                <a href="#">About Me</a>
            </li>
            
            <li>
                <a href="#">Contact</a>
            </li>
            
            <li>
                <a href="#">Testimoinals</a>
            </li>
        </ul>
        <p className='copyright'>
            Adedamola Obadimu | All Right Reserved
        </p>
    </footer>
  )
}

export default Footer