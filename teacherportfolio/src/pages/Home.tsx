import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import Header from '../components/Header'
import Particle from '../animation/Particle'

function Home() {
    return (
        <div className='cursor-default'>
            <Header />
            <AnimatedCursor
                innerSize={10}
                outerSize={32}
                color='0,240,255'
                innerScale={0.7}
                outerScale={1.2}
            />
            <Particle />
        </div>
    )
}

export default Home