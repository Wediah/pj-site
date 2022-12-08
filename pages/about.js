import React from 'react'

import { Element } from 'react-scroll'
import Image from 'next/image'

function About () {
    return (
        <Element id="about" name="about">
            <div className="bg-white min-h-screen px-10 pt-10">
                
                
                <div className=''>
                    <h3 className='underline decoration-black decoration-4 text-3xl text-black font-bold flex pt-5 text-left '>About Me</h3>
            
                </div>
                    
                
                <span className="text-md flex font-bold text-black text-center leading-8 pt-20 pb-10">
                
                </span>
          
            
            </div>
        </Element>
    );
}

export default About;