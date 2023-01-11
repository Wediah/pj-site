import Image from 'next/legacy/image'
import React from 'react'

import { Element } from "react-scroll"
import Pastor1 from '../public/pastor1.jpg'



function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen bg-no-repeat  bg-cover bg-c3nter bg-black" style={{ backgroundImage: 'url(pastor1.jpg)' }}>

                <div className='text-left  pt-60 px-10 '>
                    <h1 className=' text-sm font-bold text-white'>Reverend</h1>
                    <h1 className=' text-6xl font-bold text-white'>Jennifer Kofi</h1>
                    <h4 className='text-4xl font-md text-white pb-2 pt-5'>Singer/ Songwriter</h4>
                    <p className='text-white text-4xl font-md'>
                        Pastor Jennifer Kofi is a Ghanaian worshiper, whose vocation is to point people to Christ through worship and the Word
                    </p>

                    

                </div>

                
            </div>

        </Element>
    );
    
}

export default Homepage;