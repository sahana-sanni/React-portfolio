import React from 'react'


function Contact() {
  return (
    <section id="contact">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className='display-3 text-success'>Contact Me</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h6 className="display-6 text-success text-center">Contact Me</h6>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className='list-group-item'>
                    <strong>Location</strong>
                    <span className='text-success float-end'>Bengaluru</span>
                  </li>
                  <li className='list-group-item'>
                    <strong>Email</strong>
                    <span className='text-success float-end'>contact@gmail.com</span>
                  </li>
                  <li className='list-group-item'>
                    <strong>Mobile</strong>
                    <span className='text-success float-end'>9972373710</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-6 col-sm-12'>
            <div className="card mt-3">
              <div className="card-body">
                <form autoComplete='off'>
                  <div className="form-group mt-2">
                    <div className="row">
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <input type="text" name='name' id='name' className='form-control' required placeholder='Your Name'/>
                      
                      </div>
                      <div className="col-md-6 col-lg-6 col-sm-12">
                        <input type="email" name='email' id='email' className='form-control' required placeholder='Your email'/>
                      
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <input type='text' name='subject' id='subject' className='form-control' required placeholder='Enter Subject Here'/>
                  </div>

                  <div className="form-group mt-2">
                    <textarea name='msg' id='msg' cols="30" rows="6" className='form-control' required placeholder='Message here'></textarea>
                  </div>
                  <div className="form-group mt-2">
                    <input type='submit' value="Send" className='btn btn-success'/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact