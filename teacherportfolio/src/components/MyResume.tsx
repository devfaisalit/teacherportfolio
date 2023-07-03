import React from 'react'
import Experience from './Resume2/Experience'
import Portfolio from './Resume2/Education'
import Skills from './Resume2/Skills'
import Languages from './Resume2/Languages'

function MyResume() {
  return (
    <div>
      <Experience />
      <Portfolio/>
      <Skills/>
      <Languages/>
    </div>
  )
}

export default MyResume