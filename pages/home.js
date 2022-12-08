import Image from 'next/image'
import React from 'react'

import { Element } from "react-scroll"
import Pastor1 from '../public/pastor1.jpg'



function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen  bg-black">

                <div className='opacity-20' >
                    <Image
                        alt=""
                        src={Pastor1}
                        placeholder=""
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                        objectFit: 'cover',
                        }}
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