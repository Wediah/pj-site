import Image from 'next/legacy/image'
import React from 'react'

import { Element } from "react-scroll"




function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen bg-no-repeat  bg-cover bg-center bg-fixed bg-black  " style={{ backgroundImage: 'url(pastor1.jpg)'}}>

                <div className='text-left pt-48 pb-5 lg:pt-40 px-16  min-h-screen backdrop-brightness-50'>
                    <div className='gap-20 lg:flex'>
                        <div>
                            <h1 className=' text-sm lg:text-lg font-bold text-white'>Reverend</h1>
                            <h1 className=' text-6xl lg:text-9xl font-bold text-white'>Jennifer <br /> Kofi</h1>
                            
                        </div>
                        <div className=' lg:p-10 my-10 lg:my-0 flex-1 lg:pt-48 lg:mx-24'>
                            <h4 className='text-xl lg:text-2xl font-bold text-white pb-2 pt-5 '>Worshipper/ Preacher/ Songwriter</h4>
                            <p className='text-white text-lg lg:text-xl font-md'>
                            Pastor Jennifer Kofi is a Ghanaian worshiper, 
                            whose vocation is to point people to Christ 
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