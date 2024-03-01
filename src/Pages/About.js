import React from 'react'
import { Link } from 'react-router-dom'
import img from './../images/WhatsApp Image 2023-10-19 at 10.40.52 PM.jpeg'

function About() {
  return (
    <section id='about'>
      <div className='container mt-5'>
        {/*first row*/}
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12 text-center'>
            <h4 className='display-4 text-success'>
              About Me
            </h4>
            <p className='text-secondary'>
            My primary intent is to effectively utilize my programming and creative abilities towards achieving the
            company's objectives. I am a fast learner, dedicated & highly motivated to accept challenges and pursue
            perfection in my work. I wish to use my skills to contribute to the growth & success of the organization.
            </p>
            <Link to={`#`} target="_blank" className="btn btn-success">
                    <i className='bi bi-download text-dark'></i> Download CV</Link>
          </div>
        </div>{/*end*/}
        {/* second row */}
        <div className='row m-4'>
          <div className='col-md-4 col-lg-4 col-sm-12'>
            <div className="card">
              <img src= {img} alt="no image" className='card-img-top'height={300}/>

            </div>
          </div>
          <div className='col-md-8 col-lg-8 col-sm-12'>
            <div className="card">
              <div className="card-body text-center">
                <h6 className='text-success display-6'> I'm a Professional FullStack Developer</h6>
                <p className='small text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="card mt-2 mb-2">
              <div className="card-body">
                <ul className='list-group'>
                   <li className='list-group-item border-0 '>
                    <strong className='text-success'> <i className='bi bi-phone'>Mobile</i></strong>
                    <span className='float-end'>+91 9880021144</span>
                   </li>
                   <li className='list-group-item border-0'>
                    <strong className='text-success'> <i className='bi bi-envelope'>Email</i></strong>
                    <span className='float-end'>sahana.sanni@gmail.com</span>
                   </li>
                   <li className='list-group-item btn-group text-center border-0'>
                       <Link to={`#`} target='_blank' className='btn btn-primary btn-sm'><i className='bi bi-facebook'>Facebook</i></Link>

                       <Link to={`#`} target='_blank' className='btn btn-info btn-sm'><i className='bi bi-linkedin'>Linked In</i></Link>

                       <Link to={`#`} target='_blank' className='btn btn-dark btn-sm'><i className='bi bi-github'>Github</i></Link>

                       <Link to={`#`} target='_blank' className='btn btn-warning btn-sm'><i className='bi bi-instagram'>Instagram</i></Link>
                   </li>
                </ul>

              </div>
            </div>
          </div> 
        </div>{/*end*/}

        {/* third row */}
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="p-3 m-3">
              <h6 className='text-success display-6 text-center'>My Skills</h6>
            </div>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div>
              <p className='lead text-success'>HTML</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 90% </div>
              </div>
            </div>
            <div>
              <p className='lead text-success'>CSS</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 80% </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-6 col-sm-12'>
            <div>
              <p className='lead text-success'>JAVASCRIPT</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 70% </div>
              </div>
            </div>
            <div>
              <p className='lead text-success'>REACT</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 70% </div>
              </div>
            </div>

            </div>

            <div className='col-md-6 col-lg-6 col-sm-12'>
            <div>
              <p className='lead text-success'>NODE JS</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 75% </div>
              </div>
            </div>
            <div>
              <p className='lead text-success'>EXPRESS JS</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 60% </div>
              </div>
            </div>

            </div>

            <div className='col-md-6 col-lg-6 col-sm-12'>
            <div>
              <p className='lead text-success'>MANGO DB</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 70% </div>
              </div>
            </div>
            <div>
              <p className='lead text-success'>BOOTSTRAP</p>
              <div className='progress'>
                <div className='progress-bar bg-success' style={{width:'90%'}}> 50% </div>
              </div>
            </div>

            </div>
        </div>
      </div>

    </section>
  )
}

export default About