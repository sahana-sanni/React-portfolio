import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <main id='hero'>
    <div className="container">
    <div className="row">
        <div className='col-md-12 text-center'>
            <h3 className='display-3 text-success'>
                Sahana <strong className='text-danger'>Kattimani</strong>
            </h3>

            <h5 className='display-5 text-secondary'>
                I'm a Professional FullStack Developer
            </h5>
            <Link to={`https://drive.google.com/file/d/1mu4cX17HJy_VImQzvKnhgDQsMN3dRwYr/view?usp=drive_link`} target="_blank" className='btn btn-success'><i className='bi bi-download text-dark'></i>Download CV</Link>
        </div>
    </div>
   </div>
   </main>
  )
}

export default Home