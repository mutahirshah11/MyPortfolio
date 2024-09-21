import React from 'react'
import Projectsection from '../components/projectsection'
import Tape from '../components/tape'
import Navbar from '../components/navbar'

const project = () => {
  return (
    <div>
        <Navbar/>
       
      <Tape/>

        <Projectsection/>   

        <Tape/>
    </div>

  )
}

export default project