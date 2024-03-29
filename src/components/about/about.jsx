import React from 'react'
import './about.css'
import ME from '../../assets/s2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'> 
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
                <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0+  Years Working </small>
            </article>

            <article className='about__card' >
                <FiUsers className='about__icon' />
              <h5>Company</h5>
              <small>0+  Working </small>
            </article>

            <article className='about__card' >
                <VscFolderLibrary className='about__icon' />
              <h5>Porjects</h5>
              <small>7+  Projects</small>
            </article>
            </div>          
            <p>
            Hi, I am Ghode Satish. I am completed my bachelor's degree from Sangamner College and am a technology enthusiast. 
            I have a deep interest in development and  I am pursuing Java full-stack development from Qspider/Jspider in Pune.
            I have done 7 projects using Frontend technologies and Backend technologies. and I am practicing my coding skill on LeedCode.
             As well as I am interested in Cyber Security and practicing my cyber skill on TryHackme. total participants 1212715 and my rank is 9574.
            </p>
            <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about