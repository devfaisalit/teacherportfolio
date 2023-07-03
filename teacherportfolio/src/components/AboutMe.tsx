import React from 'react'
import About from './utilities/About'
import Services from './utilities/Services'
import Pricing from './utilities/Pricing'
import Clients from './utilities/Clients'
import Test from './utilities/Test'
import Technincalskills from './utilities/Technincalskills'
import Training from './utilities/Training'

function AboutMe() {
  return (
    <div 
    className='space-y-6 px-2 md:px-0 flex-cols md:flex-row '
    >
        <About/>
        <Services/>
        <Pricing/>
        <Technincalskills/>
        <Training/>
        <Clients/>
        <Test/>
    </div>
  )
}

export default AboutMe