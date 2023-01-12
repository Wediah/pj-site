import Image from 'next/legacy/image'
import React from 'react'

import { Element } from "react-scroll"




function Homepage () {
    return (
        <Element id="home" name="home">
            <div className="min-h-screen bg-no-repeat  bg-cover bg-center  bg-black " style={{ backgroundImage: 'url(pastor1.jpg)'}}>

                <div className='text-left pt-48  lg:pt-40 px-16 '>
                    <div className='gap-20 lg:flex'>
                        <div>
                            <h1 className=' text-sm lg:text-lg font-bold text-white'>Reverend</h1>
                            <h1 className=' text-6xl lg:text-9xl font-bold text-white'>Jennifer <br /> Kofi</h1>
                            
                        </div>
                        <div className=' lg:p-10 my-10 flex-1 lg:pt-48'>
                            <h4 className='text-4xl lg:text-6xl font-bold text-white pb-2 pt-5 underline underline-offset-8 '>Worshipper/ Preacher/ Songwriter</h4>
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