import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { ImArrowUpRight2 } from 'react-icons/im'
import { Element } from 'react-scroll'
import Image from 'next/image';
import youtube from '../public/youtube.png'

function Videos() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '210',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
         
        },
      
      };


  return (
    <Element id='videos' name='videos'>
    <div className="bg-white  bg-fixed   bg-no-repeat  bg-cover bg-center " style={{ backgroundImage: 'url(pastor4.png)'}}>

      <div className='min-h-screen backdrop-blur-sm pb-5 pt-10 px-5'>
        <h3 className=' text-4xl text-white font-bold pt-10 lg:text-center lg:text-7xl text-left '>Videos</h3>

        <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap pt-16 justify-center'>
          <div><YouTube videoId="0zd9hbKlkvM" opts={opts} onReady={onPlayerReady} /></div>
          <div><YouTube videoId="Hl1XPdCX-2c" opts={opts} onReady={onPlayerReady} /></div>
          <div><YouTube videoId="yOffjjIIiqU" opts={opts} onReady={onPlayerReady} /></div>
          <div><YouTube videoId="EcqKKUdlFCU" opts={opts} onReady={onPlayerReady} /></div>
          <div><YouTube videoId="mMLVu2s5-GY" opts={opts} onReady={onPlayerReady} /></div>
          <div><YouTube videoId="eE1AiUaDXLw" opts={opts} onReady={onPlayerReady} /></div>
          
        </div>

        <a href="https://www.youtube.com/@jenniferkofi5603"><div className="text-center p-10"> <button className='group/edit'><Image src={youtube} width={50} alt='' className="pb-2 hover:transition group-hover/edit:-translate-y-4 duration-300 delay-150 mx-auto"/> <span className="text-white text-2xl lg:text-4xl font-bold cursor-pointer">Visit my channel</span></button></div></a>


        
      </div>


    </div>
    </Element>

  )
}

export default Videos