import Image from 'next/legacy/image'
import React from 'react'

import { Element } from "react-scroll"
import Pastor1 from '../public/pastor1.jpg'



function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen bg-no-repeat  bg-cover bg-center bg-black brightness-50" style={{ backgroundImage: 'url(pastor1.jpg)'}}>

                <div className='text-left pt-28  lg:pt-40 px-16 '>
                    <div className='gap-10 flex lg:flex-row'>
                        <div>
                            <h1 className=' text-sm font-bold text-white'>Reverend</h1>
                            <h1 className=' text-6xl font-bold text-white'>Jennifer Kofi</h1>
                            <h4 className='text-4xl font-md text-white pb-2 pt-5'>Singer/ Songwriter</h4>
                        </div>
                        <div className=''>
                            <p className='text-white text-2xl lg:text-4xl font-md'>
                            Pastor Jennifer Kofi is a Ghanaian worshiper, <br/> 
                            whose vocation is to point people to Christ <br/>
                            through worship and the Word.
                        </p>
                        </div>
                    </div>
                    


                    

                </div>

                
            </div>

        </Element>
    );
    
}

export default Homepage;