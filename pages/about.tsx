import React from 'react'

import { Element } from 'react-scroll'
import Image from 'next/image'

function About () {
    return (
        <Element id="about" name="about">
            <div className="bg-white min-h-screen px-10 pt-10 bg-no-repeat pb-5 bg-cover bg-center " style={{ backgroundImage: 'url(pastor2.jpg)'}}>
                
                
                <h3 className=' text-4xl text-white font-bold pt-10 lg:text-center lg:text-7xl text-left'>About Me</h3>
                
                    
                <div className=' lg:px-16 gap-20 lg:flex '>      
                    
                    <div className="text-2xl lg:text-4xl flex text-white  leading-8 pt-20 pb-10 ">
                    Reverend Jennifer Kofi is a Ghanaian worshiper, preacher and songwriter, whose vocation is to worship in spirit and truth and also point the world to Christ.  <br /> Rev. Jennifer has ministered across the Ghana and sharing the stage with the likes of Bethel Revival Music and Joe Mettle. <br /> In 2022, She also appeared on Bethel Revival Choir&aposs ENYO album.
                    </div>

                    <div className='text-white lg:pt-20'>
                       <h1 className='text-sm font-light'>FOLLOW MY JOURNEY</h1> 
                       <a href=''><button className='text-2xl lg:text-4xl font-bold cursor-pointer'>YOUTUBE</button></a>
                       <a href=""><button className='text-2xl lg:text-4xl font-bold cursor-pointer'>INSTAGRAM</button></a>
                       <a href=""><button className='text-2xl lg:text-4xl font-bold cursor-pointer'>FACEBOOK</button></a>
                    </div>
                </div>
                
          
            
            </div>
        </Element>
    );
}

export default About;