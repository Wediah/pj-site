import React from 'react'
import Image from 'next/image'
import apple from '../public/apple.png'
import spot from '../public/spotify.png'
import itunes from '../public/itunes.png'
import pod from '../public/podcast.png'

function Music() {
  return (
    <div className="bg-white min-h-screen px-10 pt-10 bg-no-repeat pb-5 bg-cover bg-center " style={{ backgroundImage: 'url(pastor4.png)'}}>
        <h1 className=' text-4xl text-white font-bold pt-10 lg:text-center lg:text-7xl text-left '>Music <span className='text-sm'>& Podcast</span></h1>

        <div>
            <div><Image src={apple} width={50} height={50} alt="" className="" /></div>
            <div><Image src={spot} width={50} height={50} alt="" className="" /></div>
            <div><Image src={itunes} width={50} height={50} alt="" className="" /></div>
            <div><Image src={pod} width={50} height={50} alt="" className="" /></div>
        </div>


    </div>
  )
}

export default Music