import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id='services' >
        <h5>I can help</h5>
        <h2>About this content</h2>

        <div className="container services_container ">
          <article className="service">
            <div className="service__head">
              <h3>Database</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' />
                  <p>Good understanding of RDBMS concepts like constraints, Normalization, Tables etc.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Excellent knowledge of writing SQL queries.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Good understanding of SQL concepts like Grouping, Sub queries, Functions etc</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Solid understanding of SQL Joins (Inner joins, Left join and Right joins and full Joins)</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p> Good knowledge of DDL, DML and TCL</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p><strong>Tools : </strong>Oracle , MySQL ,Microsoft SQL Server.  </p>
                </li>
                {/* <li>
                  <BiCheck className='service__list-icon' />
                  <p>Writing documentation.</p>
                </li> */}
            </ul>
          </article>
          {/* END OF THE UI/UX  */}
          <article className="service">
            <div className="service__head">
              <h3>Solve DSA Q using Java</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' />
                  <p> Knowledge of JVM , JRE and JDK.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Understanding of Tokens , Literals , DataTypes , Operators , Flow Control Statements.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Knowledge of Objects , Classes and Constructors .</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p> Aware about principles of Java like Inheritance , Abstraction , Polymorphism And Encapsulation.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p> Good understanding of Collection framework</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Solve Question On Online Platform <strong> LeetCode </strong> </p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Implementation of the queue using array and LinkedList and much more.</p>
                </li>
            </ul>
          </article>
          {/* END OF THE END OF WEB DESIGN */}
          <article className="service">
            <div className="service__head">
              <h3>Cyber Security</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' />
                  <p>Development, testing, analysis and implementation of security systems.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Assessment and management of system vulnerability.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Security threats, attacks and other similar events: Response.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Development of threat prevention strategies.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Regular production of reports for administrators and executives.</p>
                </li>
            </ul>
          </article>
          {/* END OF THE cyber   */}
        </div>

    </section>
  )
}

export default Services