import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { ImArrowUpRight2 } from 'react-icons/im'
import { Element } from 'react-scroll'

function Videos() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '220',
        width: '360',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
         
        },
      };


  return (
    <Element id='videos' name='videos'>
    <div className="bg-white min-h-screen px-10 pt-10 bg-no-repeat pb-5 bg-cover bg-center " style={{ backgroundImage: 'url(pastor4.png)'}}>

      <h3 className=' text-4xl text-white font-bold pt-10 lg:text-center lg:text-7xl text-left '>Videos</h3>

      <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap pt-16 lg:mx-80'>
        <div><YouTube videoId="0zd9hbKlkvM" opts={opts} onReady={onPlayerReady} /></div>
        <div><YouTube videoId="Hl1XPdCX-2c" opts={opts} onReady={onPlayerReady} /></div>
        <div><YouTube videoId="yOffjjIIiqU" opts={opts} onReady={onPlayerReady} /></div>
        <div><YouTube videoId="EcqKKUdlFCU" opts={opts} onReady={onPlayerReady} /></div>
      </div>

      <a href=""><button className='text-white text-2xl lg:text-4xl text-center flex p-10 font-bold lg:ml-80 group/edit cursor-pointer'>Visit my channel<ImArrowUpRight2 className='text-gray-400 group-hover/edit:-translate-y-2.5 group-hover/edit:text-white duration-75 align-middle'/></button></a>

    </div>
    </Element>

  )
}

export default Videos