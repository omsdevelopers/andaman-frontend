import React from 'react';

const BackgroundVideo = ({ videoSource }) => {
  return (
    <div className="background-video mobile_view_background">
      <video autoPlay muted loop id="background-video" className='mobile_video'>
        <source src={videoSource} type="video/mp4" autoPlay muted loop />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .background-video {
          width: 100%;
          height: 77vh; /* Adjust the height of the container */
          position: relative;
          overflow: hidden;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;
