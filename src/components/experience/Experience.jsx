import React from 'react'
import './experience.css'
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoServer } from "react-icons/io5";
import { SiOracle } from "react-icons/si";

const Experience = () => {
  return (
    // Edite the experience section Id 
    <section id='experience' >
      <h5>What Skill I have</h5>
      <h2>And Experience </h2>
      <div className="container experience__container">
        <div className="experence__frontend " >
            <h3>Frontend Development</h3>
                      <div className="experience__content">
              <article className='experience__details' >
                <RiHtml5Fill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiCss3 className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='experience__details' > Intermediate </small>
                </div>
              </article>
              <article className='experience__details' >
                <FaBootstrap className='experience__details-icon' />
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='experience__details' >Intermediate</small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiTailwindcss className='experience__details-icon' />
                <div>
                  <h4>Material UI</h4>
                  <small className='experience__details' >Intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <TbBrandJavascript className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='experience__details' >Intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <GrReactjs className='experience__details-icon' />
                  <div>
                    <h4>React</h4>
                    <small className='experience__details' > Intermediate </small>
                  </div>
              </article>

            </div>
        </div>
        {/* ++++++++++++++++++++++++++++ end of frontend +++++++++++++++++++ */}

          {/* backend section works  */}

        <div className="experience__backend">
              <div className='experience__details1' > 
                {/* <BsPatchCheckFill className='experience__details-icon' /> */}
                <h3>Backend Development Using Java</h3>
              </div >
            <div className="experience__content">
              <article className='experience__details' >
                <DiJava className='experience__details-icon' />
                <div>
                  <h4>Core Java</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <DiJava className='experience__details-icon' />
                  <div>
                    <h4>Adv Java</h4>
                    <small className='experience__details' > Intermediate </small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiHibernate className='experience__details-icon' />
                  <div>
                    <h4>Hibernate</h4>
                    <small className='experience__details' >Intermediate</small>
                  </div>     
              </article>
              <article className='experience__details' >
                <SiSpring className='experience__details-icon' />
                <div>
                  <h4>Spring Framework</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiSpring className='experience__details-icon' />
                  <div>
                    <h4>SpringBoot</h4>
                    <small className='experience__details' >Experience </small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiSpring className='experience__details-icon' />
                  <div>
                    <h4>SpringMVC</h4>
                    <small className='experience__details' >Experience </small>
                  </div>
              </article>
            </div>

            {/* ++++++++++++++++++++ END of the backend++++++++++++++++++++++ */}

        </div>

      </div>
      <div className="container1 experience__container">
        <div className="experence__frontend " >
          <div className='experience__details1 ' >
          {/* <BsPatchCheckFill className='experience__details-icon' /> */}
            <h3>Backend Development Using JavaScript </h3>
            </div>
            <div className="experience__content">
              <article className='experience__details' >
                <TbBrandJavascript className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <TbBrandJavascript className='experience__details-icon' />
                <div>
                  <h4>Adv JavaScript</h4>
                  <small className='experience__details' > Experience </small>
                </div>
              </article>
              <article className='experience__details' >
                <FaNode className='experience__details-icon' />
                  <div>
                  <h4>Node JS</h4>
                  <small className='experience__details' >Intermediate</small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiExpress className='experience__details-icon' />
                <div>
                  <h4>Express Js</h4>
                  <small className='experience__details' >Intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiMongodb className='experience__details-icon' />
                  <div>
                    <h4>NOSQL</h4>
                    <small className='experience__details' > Intermediate </small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiMysql className='experience__details-icon' />
                <div>
                  <h4>MYSQL</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
            </div>
        </div>
        {/* ++++++++++++++++++++++++++++ end of frontend +++++++++++++++++++ */}

          {/* backend section works  */}

        <div className="experience__backend">
              <div className='experience__details1 ' > 
                {/* <BsFillPatchCheckFill className='experience__details-icon' /> */}
                <h3> Dev Tools</h3>
              </div >
            <div className="experience__content">
              <article className='experience__details' >
                <FaGitAlt className='experience__details-icon' />
                <div>
                  <h4>Git</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <FaGithub className='experience__details-icon' />
                  <div>
                    <h4>GitHub</h4>
                    <small className='experience__details' > Experience </small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiPostman className='experience__details-icon' />
                  <div>
                    <h4>PostMan</h4>
                    <small className='experience__details' >Experience</small>
                  </div>     
              </article>
              <article className='experience__details' >
                <IoServer className='experience__details-icon' />
                <div>
                  <h4>MYSQL Server</h4>
                  <small className='experience__details' >Experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiMongodb className='experience__details-icon' />
                  <div>
                    <h4>Mongoose</h4>
                    <small className='experience__details' > Experience </small>
                  </div>
              </article>
               <article className='experience__details' >
                <SiOracle className='experience__details-icon' />
                <div>
                  <h4>Oracle</h4>
                  <small className='experience__details' >Basic</small>
                </div>
              </article> 
            </div>

            {/* ++++++++++++++++++++ END of the backend++++++++++++++++++++++ */}

        </div>

      </div>
    </section>
  )
}

export default Experience