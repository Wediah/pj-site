import Image from 'next/legacy/image'
import React from 'react'

import { Element } from "react-scroll"
import Pastor1 from '../public/pastor1.jpg'



function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen  ">

            <div style={{
                    zIndex: -1,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh"
                    }}>
                    <Image 
                    className='brightness-50'
                    src={Pastor1}
                    alt=""
                    layout="fill"
                    objectFit='cover'
                />
                </div>

                

                <div className='text-left  pt-80 px-10 '>
                    <h1 className=' text-6xl font-bold text-white'>Pastor Jennifer Kofi</h1>
                    <h4 className='text-4xl font-md text-white pb-2 pt-10'>Singer/ Songwriter</h4>
                    <p className='text-white text-md'>
                        Pastor Jennifer Kofi is a Ghanaian worshiper, whose vocation is to point people to Christ through worship and the Word
                    </p>

                    

                </div>

                
            </div>

        </Element>
    );
    
}

export default Homepage;