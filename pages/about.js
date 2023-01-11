import React from 'react'

import { Element } from 'react-scroll'
import Image from 'next/image'

function About () {
    return (
        <Element id="about" name="about">
            <div className="bg-white min-h-screen px-10 pt-10 bg-no-repeat  bg-cover bg-center brightness-50" style={{ backgroundImage: 'url(pastor2.jpg)'}}>
                
                
                <h3 className=' text-3xl text-white font-bold pt-5 lg:text-center lg:text-7xl text-left px-16'>About Me</h3>
                
                    
                <div className='px-16'>      
                    
                    <div className="text-md flex font-bold text-white text-center leading-8 pt-20 pb-10 ">
                    Reverend Jennifer Kofi is a Ghanaian worshiper, preacher and songwriter, whose vocation is to worship in spirit and truth and also point the world to Christ. Rev. Jennifer has ministered across the Ghana and sharing the stage with the likes of Bethel Revival Music and Joe Mettle. In 2022, She also appeared on Bethel Revival Group's album ,ENYO.
                    </div>

                    <div>
                        
                    </div>
                </div>
                
          
            
            </div>
        </Element>
    );
}

export default About;