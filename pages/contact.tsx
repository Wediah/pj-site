import React from 'react'
import { Element } from 'react-scroll'

function Contact() {
  return (
    <Element id='booking' name='booking'>
    <div className="bg-white  px-10 pt-16 pb-32">

    <h1 className=' text-4xl text-black font-bold pt-10 pb-5 lg:text-6xl text-left '>Get In Touch With Me</h1>

    <h2 className='text-md font-thin pb-2'>send me a message</h2>
    <button className='p-1 bg-black text-white text-md rounded-sm'>BOOK NOW</button>
    </div>
    </Element>
  )
}

export default Contact