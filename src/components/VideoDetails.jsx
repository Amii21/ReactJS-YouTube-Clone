import React from 'react'

const VideoDetails = ({video}) => {
   if(!video){return <div>Loading....</div>}
   const videoSrc = `https://www.youtube.com/embed/${video.id.channelId}`;

   return (
       <>
       <div>
           <iframe src={videoSrc} title="Video Player" className='w-100' style={{height: '380px'}}></iframe>
       </div>
       <div className='border p-2'>
           <h4>{video.snippet.title}</h4>
           <p>{video.snippet.description}</p>
       </div>
       </>
   )
}

export default VideoDetails;
