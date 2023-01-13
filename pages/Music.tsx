import React from 'react'
import Image from 'next/image'
import apple from '../public/apple.png'
import spot from '../public/spotify.png'
import itunes from '../public/itunes.png'
import pod from '../public/podcast.png'
import { Element } from 'react-scroll'

function Music() {
  return (
    <Element name='music' id='music'>
    <div className="bg-white bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(pj5.png)'}}>
      <div className='backdrop-blur-sm px-10 pt-16 pb-32'>
        <h1 className=' text-4xl text-white font-bold pt-10 lg:text-center lg:text-7xl text-left '>Music <span className='text-2xl'>& Podcast</span></h1>

        <div className='flex gap-5 pt-16  justify-center'>
            <a href="https://music.apple.com/gh/artist/jennifer-kofi/1471115987"><div><Image src={apple} width={100} height={50} alt="" className="" /></div></a>
            <a href="https://open.spotify.com/artist/7CAKn7NVm6DUR3w6yGvPUU"><div><Image src={spot} width={100} height={50} alt="" className="" /></div></a>
            <a href=""><div><Image src={itunes} width={100} height={50} alt="" className="" /></div></a>
            <a href="https://podcasts.apple.com/us/podcast/the-revive-podcast/id1611004724"><div><Image src={pod} width={100} height={50} alt="" className="" /></div></a>
        </div>
      </div>

    </div>
    </Element>
  )
}

export default Music